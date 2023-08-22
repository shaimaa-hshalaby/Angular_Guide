import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  //// capitalize one word
  // transform(value:string): string {
  //   return value.charAt(0).toUpperCase()+value.slice(1)
  // }

// capitalize the whole statement
  transform(value:string): string {
    return value.split(" ")
                .map(word => word.charAt(0).toUpperCase()+word.slice(1))
                .join(" ")
    
  }

}
