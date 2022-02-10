import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapital'
})
export class FirstCapitalPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    if (value && value.length) {
      return `${ value[0].toUpperCase() }${ value.slice(1, value.length)
        .toLowerCase() }`;
    } else {
      return '';
    }
  }
}
