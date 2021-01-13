import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  // personal note: revisit recurion...it's terrifying lol
  transform(value: any, sortValue: string): any {
    return value.sort((a, b) => {
      let nameA = a[sortValue].toUpperCase();
      let nameB = b[sortValue].toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}
