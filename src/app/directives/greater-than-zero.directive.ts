import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

/**
 * @description Validates that the input field of a form is greater than zero.
 * @author Alejandro Asensio
 * @version 2019-04-05
 */
@Directive({
  selector: '[appGreaterThanZero]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: GreaterThanZeroDirective,
      multi: true
    }
  ]
})
export class GreaterThanZeroDirective implements Validator {
  constructor() {}

  validate(field: AbstractControl): { [key: string]: any } {
    let validInput = false;

    if (field) {
      if (field.value !== undefined && field.value > 0) {
        validInput = true;
      }
    }

    return validInput ? null : { zeroOrLess: true };
  }
}
