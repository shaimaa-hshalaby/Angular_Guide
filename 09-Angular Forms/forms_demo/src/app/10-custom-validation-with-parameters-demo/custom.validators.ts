import { FormControl,ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms'

export function validateEmployeeCodeWithParameter(prefix:string):ValidatorFn{
    return (control: AbstractControl):ValidationErrors|null => {
        if(!control.value.startsWith(prefix)){
            return {notPrefixed:true}
        }
        return null
    }
}