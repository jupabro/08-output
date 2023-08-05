import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function rangeDateValidator(minYear: Date, maxYear: Date): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const date = new Date(control.value, 0, 1);

        if (minYear.getTime() < date.getTime() && date.getTime() < maxYear.getTime()) {
            return null;
        } else {
            return { 'min': { minimum: minYear, maximum: maxYear } };

        }
    };
}0