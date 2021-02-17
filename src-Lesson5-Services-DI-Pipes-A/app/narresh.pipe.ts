import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'narresh'
})
export class NarreshPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
