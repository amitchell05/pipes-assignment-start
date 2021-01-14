import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  // personal note: revisit recurion...it's terrifying lol
  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        // returns something
        return 1;
      } else {
        // returns something
        return -1;
      }
      // return 0 => it will do nothing
    });
  }
}
