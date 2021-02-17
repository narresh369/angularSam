import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

 /*  transform(value: any, args?: any): any {
    return null;
  } */

  transform(value: number, multiply: string): number { 
    let mul = parseFloat(multiply); 
    return mul * value 
 } 

}
