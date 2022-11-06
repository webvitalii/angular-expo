import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {
  transform(items: Array<any>, filterCol: string, filterTerm: string): any {
    if (!items) {
      return [];
    }
    if (!filterTerm) {
      return items;
    }
    filterTerm = filterTerm.toString().toLowerCase();

    return items.filter((item) => {
      return item[filterCol].some((subitem) => {
        return subitem.toLowerCase().includes(filterTerm);
      });
    });
  }
}
