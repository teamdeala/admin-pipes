import { Pipe, PipeTransform } from '@angular/core';
import { declOfNum } from './pipes-utils';

@Pipe({
  name: 'decline'
})
export class DeclinePipe implements PipeTransform {
  transform(value: any, titles: any): any {
    if ((value || value === 0) && titles.length === 2) {
      return declOfNum(value, titles);
    } else {
      return value;
    }
  }
}
