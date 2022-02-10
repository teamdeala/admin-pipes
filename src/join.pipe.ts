import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(values: any[], separator?: string): string {
    return values
      .join(separator)
      .trim();
  }
}
