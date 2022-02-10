import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    let arr;
    if (value[0] === '+') {
      arr = `${ value.substr(0, 2) } (${ value.substr(2, 3) }) ${ value.substr(5, 3) }-${ value.substr(8, 2) }-${ value.substr(10) }`;
    } else if (+value[0] === 7) {
      arr = `8 (${ value.substr(1, 3) }) ${ value.substr(4, 3) }-${ value.substr(7, 2) }-${ value.substr(9) }`;
    } else {
      arr = `+${ (+value[0] - 1) } (${ value.substr(1, 3) }) ${ value.substr(4, 3) }-${ value.substr(7, 2) }-${ value.substr(9) }`;
    }

    return arr;
  }
}
