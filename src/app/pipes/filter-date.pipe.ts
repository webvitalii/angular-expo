import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {
  transform(items: Array<any>, filterToFrom: string, filterDate: string): any {
    if (!items) {
      return [];
    }
    if (!filterDate) {
      return items;
    }
    const date = new Date(filterDate);

    return items.filter((item) => {
      const itemDate = new Date(item.date);
      if (filterToFrom === 'to') {
        return itemDate <= date;
      } else {
        // from
        return itemDate >= date;
      }
    });
  }
}
