import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes'
})
export class IncludesPipe implements PipeTransform {
  transform(arr: any, searchItem: any): boolean {
    return arr.includes(searchItem);
  }
}
