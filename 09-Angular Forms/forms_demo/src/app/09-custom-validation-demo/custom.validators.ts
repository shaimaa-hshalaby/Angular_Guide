import { AbstractControl,ValidationErrors } from '@angular/forms'


export function validateEmployeeCode(control:AbstractControl):ValidationErrors|null{
    let prefix = 'ABC'
    if(!control.value.startsWith(prefix)){
        return {notPrefixed:true}
    }
    return null
}