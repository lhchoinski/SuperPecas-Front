// cadastrar.component.ts
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CarroService} from '../../../services/carro.service';

@Component({
  selector: 'app-carroCadastrar',
  templateUrl: './carro-cadastrar.component.html',
  styleUrls: ['./carro-cadastrar.component.css']
})
export class CarroCadastrarComponent {
  carro = {
    nome: '',
    fabricante: '',
    serial: ''
  };

  constructor(
    private carroService: CarroService,
    private router: Router
  ) {
  }

  salvarCarro() {
    this.carroService.cadastrarCarro(this.carro).subscribe(
      () => {
        this.router.navigate(['/pages/carro/listar']);
      },
      error => {
        console.error('Erro ao cadastrar carro:', error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/pages/carro/listar']);
  }

  limparDados() {
    this.carro = {
      nome: '',
      fabricante: '',
      serial: ''
    };
  }
}
