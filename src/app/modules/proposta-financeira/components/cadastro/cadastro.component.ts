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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ValidatorsUtils } from '../../../../shared/utils/validator.utils';

@Component({
  selector: 'app-cadastro',
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
    MatProgressBarModule,
  ],
  providers: [PropostaFinanceiraService],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  isSaving: boolean = false;

  cadastroForm: FormGroup = this.formBuilder.group({
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
    this.cadastroForm.markAllAsTouched();

    if (this.cadastroForm.valid) {
      this.isSaving = true;
      this.cadastroForm.disable();

      //Timeout utilizado para testar o loader
      setTimeout(() => {
        this.propostaFinanceiraService
          .postProposta(this.cadastroForm.value)
          .subscribe((proposta) => this.goBack());
      }, 3000);
    }
  }

  goBack(): void {
    this.location.back();
  }

  getError(controlName: string): string {
    return ValidatorsUtils.getErrorMessage(
      this.cadastroForm.controls[controlName]
    );
  }
}
