import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarroService} from '../../../services/carro.service';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-carro-editar',
  templateUrl: './carro-editar-component.html',
  styleUrls: ['./carro-editar-component.css'],
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    MatInput,
    MatLabel,
    MatCardSubtitle
  ],
})
export class CarroEditarComponent implements OnInit {
  carroForm!: FormGroup;
  carroId!: number;

  constructor(
    private fb: FormBuilder,
    private carroService: CarroService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.carroId = this.route.snapshot.params['id'];
    this.createForm();

    this.carroService.getCarroById(this.carroId).subscribe(carro => {
      this.carroForm.patchValue(carro);
    });
  }

  createForm() {
    this.carroForm = this.fb.group({
      nome: [''],
      fabricante: [''],
      serial: ['']
    });
  }

  onCancel() {
    this.router.navigate(['/pages/carro/listar']); // Navegar de volta para a listagem
  }

  onSubmit() {
    this.carroService.editCarro(this.carroId, this.carroForm.value).subscribe(() => {
      this.router.navigate(['/pages/carro/listar']);
    });
  }

  limparDados() {
    this.carroForm.reset(); // Reseta os valores do formulário para vazio
  }

}
