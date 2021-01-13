import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: any): any {
    let reversedString = '';

    for (let i = 0; i < value.length; i++) {
      reversedString = value[i] + reversedString;
    }
    return reversedString;
  }
}
