import { AbstractControl } from '@angular/forms';
import { INPUT_ERROR } from '../constants/input-error.constant';

export abstract class ValidatorsUtils {
  static errors: {
    [key: string]: any;
  } = INPUT_ERROR;

  static getErrorMessage(control: AbstractControl): string {
    if (control) {
      const controlErrors = control.errors;
      if (controlErrors) {
        const firstKey = Object.keys(controlErrors)[0];
        return this.errors[firstKey];
      }
    }

    return '';
  }
}
