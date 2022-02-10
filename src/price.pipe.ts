import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && +value) {
      const parts = value.toString()
        .split('.');
      const len = parts[0].toString().length;
      const catnum = Math.floor(len / 3);
      const arr = parts[0].toString()
        .split('');
      for (let i = 0; i < catnum; i++) {
        arr.splice(len - (i + 1) * 3, 0, '\u00A0');
      }
      parts[0] = arr.join('')
        .trim();

      return parts.join('.');
    } else {
      return value;
    }
  }
}
