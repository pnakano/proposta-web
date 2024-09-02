import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'input-error',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule],
  templateUrl: './input-error.component.html',
  styleUrl: './input-error.component.scss',
})
export class InputErrorComponent implements OnInit {
  // TODO - mover para arquivo separado
  errors: {
    [key: string]: any;
  } = {
    required: `Campo Obrigatório`,
    email: 'E-mail inválido',
  };

  private subscription = new Subscription();
  errorMessage: string = '';

  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;

  ngOnInit(): void {
    if (this.formGroup) {
      const control = this.formGroup.controls[this.controlName];
      if (control) {
        this.subscription = control.valueChanges
          .pipe(distinctUntilChanged())
          .subscribe(() => {
            const controlErrors = control.errors;
            if (controlErrors) {
              const firstKey = Object.keys(controlErrors)[0];
              this.setError(this.errors[firstKey]);
            } else {
              this.setError('');
            }
          });
      } else {
        this.setError('');
      }
    } else {
      this.setError('');
    }
  }

  setError(text: string) {
    this.errorMessage = text;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
