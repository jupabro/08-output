import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function isRequiredValidator(controlName1: string, controlName2: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const value1 = control.get(controlName1)?.value
        const value2 = control.get(controlName2)?.value

        const capitalizeFirstLetter = (str: string): string => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        if (!value1 && !value2) {
            return { 'isRequired': { message: `One of the two fields ${capitalizeFirstLetter(controlName1)} or ${capitalizeFirstLetter(controlName2)} must be filled in.` } };
        } else {
            return null
        }
    };
}