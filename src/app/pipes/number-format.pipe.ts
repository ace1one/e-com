import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

 
  transform(value: any): any {
    let convertNumber = new Intl.NumberFormat('en-IN').format(value.toString())
     return convertNumber;
   }

}
