import { Pipe, PipeTransform } from '@angular/core';
import { romanize } from './pipes-utils';

@Pipe({
  name: 'romanize'
})
export class RomanizePipe implements PipeTransform {

  transform(value: number): string {
    return romanize(value);
  }
}
