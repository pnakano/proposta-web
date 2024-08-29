import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PropostaFinanceiraService } from '../../services/proposta-financeira.service';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
  ],
  providers: [PropostaFinanceiraService],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private propostaFinanceiraService: PropostaFinanceiraService,
    private router: Router,
    private location: Location
  ) {}

  postProposta(): void {
    let proposta = {
      nome: 'teste',
      sobrenome: 'testes',
      telefone: '(11) 11111-1111',
      cpf: '123.456.789-01',
      email: 'pamela.nakano@hotmail.com',
      renda: 10000.0,
      valorSolicitado: 5000.0,
      prazoPagamento: 6,
    };
    this.propostaFinanceiraService
      .postProposta(proposta)
      .subscribe((proposta) => {
        console.log(proposta);
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
