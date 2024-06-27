import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from '../../../services/carro.service';
import { PecaService } from '../../../services/peca.service';
import { FormControl } from '@angular/forms';
import { IPeca } from '../../../Interfaces/IPeca'; // Ajuste o caminho conforme a estrutura do seu projeto
import { ICarro } from '../../../Interfaces/ICarro'; // Ajuste o caminho conforme a estrutura do seu projeto

@Component({
  selector: 'app-pecaCadastrar',
  templateUrl: './peca-cadastrar.component.html',
  styleUrls: ['./pecas-cadastrar.component.css']
})
export class PecaCadastrarComponent implements OnInit {

  carros: ICarro[] = [];

  filteredOptions: ICarro[] = [];

  peca: IPeca = {
    id: null,
    nome: '',
    descricao: '',
    serial_number: '',
    fabricante: '',
    carro: {
      id:null,
      nome:null,
      serial:null,
      fabricante:null
    }
  };

  carroControl = new FormControl();

  constructor(
    private pecaService: PecaService,
    private carroService: CarroService,
    private router: Router,
  ) {}

  getNames() {
    this.carroService.getAllCarros().subscribe(response => {
      this.carros = response;
      this.filteredOptions = response;
    });
  }

  ngOnInit() {
    this.getNames();
  }

  salvarPeca() {
    const carroIdSelecionado = this.carroControl.value;
    const carroSelecionado = this.carros.find(carro => carro.id === carroIdSelecionado);

    if (carroSelecionado) {
      this.peca.carro = carroSelecionado;
    }

    this.pecaService.cadastrarPeca(this.peca).subscribe(
      () => {
        this.router.navigate(['/pages/peca/listar']);
      },
      error => {
        console.error('Erro ao cadastrar peça:', error);
      }
    );
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
      carro: {
        id:null,
        nome:null,
        serial:null,
        fabricante:null
      }
    };
    this.carroControl.setValue('');
  }
}
