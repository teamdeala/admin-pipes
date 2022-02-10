import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixed'
})
export class FixedPipe implements PipeTransform {

  transform(value: number, fractionDigits?: number): number {
    return +(value).toFixed(fractionDigits);
  }
}
