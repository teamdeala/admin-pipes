import { Pipe, PipeTransform } from '@angular/core';
import { linkWithProtocol } from './pipes-utils';

@Pipe({
  name: 'linkWithProtocol'
})
export class LinkWithProtocolPipe implements PipeTransform {
  transform(value: string): string {
    return linkWithProtocol(value);
  }
}
