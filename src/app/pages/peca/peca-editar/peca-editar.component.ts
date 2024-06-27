import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarroService } from '../../../services/carro.service';
import { PecaService } from '../../../services/peca.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Carro {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-pecaCadastrar',
  templateUrl: './peca-cadastrar.component.html',
  styleUrls: ['./pecas-cadastrar.component.css']
})
export class PecaCadastrarComponent implements OnInit {

  title = 'autocomplete';

  options: Carro[] = [];
  filteredOptions: Observable<Carro[]>;

  formGroup: FormGroup;

  peca = {
    id: null,
    nome: '',
    descricao: '',
    serial_number: '',
    fabricante: '',
    carro: 0  // carro é apenas o ID do carro
  };

  carroControl = new FormControl();

  constructor(
    private pecaService: PecaService,
    private carroService: CarroService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      carroControl: new FormControl()
    });
  }

  ngOnInit() {
    this.getNames();
    this.loadPeca();
  }

  getNames() {
    this.carroService.getCarrosPorNome('').subscribe(response => {
      this.options = response;
      this.filteredOptions = this.carroControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  private _filter(value: string): Carro[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  loadPeca() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pecaService.getPecaById(+id).subscribe(data => {
        this.peca = data;
        this.carroControl.setValue(data.carro.id);
      });
    }
  }

  salvarPeca() {
    this.peca.carro = this.carroControl.value;

    if (this.peca.id) {
      // Editar peça existente
      this.pecaService.atualizarPeca(this.peca).subscribe(
        () => {
          this.router.navigate(['/pages/peca/listar']);
        },
        error => {
          console.error('Erro ao atualizar peça:', error);
        }
      );
    } else {
      // Criar nova peça
      this.pecaService.cadastrarPeca(this.peca).subscribe(
        () => {
          this.router.navigate(['/pages/peca/listar']);
        },
        error => {
          console.error('Erro ao cadastrar peça:', error);
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/pages/peca/listar']);
  }

  limparDados() {
    this.peca = {
      id: null,
      nome: '',
      descricao: '',
      serial_number: '',
      fabricante: '',
      carro: 0
    };
    this.carroControl.setValue('');
  }
}
