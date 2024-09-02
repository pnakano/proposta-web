import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PropostaFinanceiraService } from '../../services/proposta-financeira.service';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { NgxMaskDirective } from 'ngx-mask';
import { InputErrorComponent } from '../../../../shared/components/input-error/input-error.component';

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
    NgxMaskDirective,
    InputErrorComponent,
  ],
  providers: [PropostaFinanceiraService],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  crudForm: FormGroup = this.formBuilder.group({
    nome: [null, Validators.required],
    sobrenome: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    telefone: [null, Validators.required],
    cpf: [null, Validators.required],
    renda: [null, Validators.required],
    valorSolicitado: [null, Validators.required],
    prazoPagamento: [null, null],
  });

  constructor(
    private propostaFinanceiraService: PropostaFinanceiraService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  postProposta(): void {
    this.crudForm.markAllAsTouched();
    if (!this.crudForm.valid) {
      return;
    }
    this.propostaFinanceiraService
      .postProposta(this.crudForm.value)
      .subscribe((proposta) => {
        console.log(proposta);
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
