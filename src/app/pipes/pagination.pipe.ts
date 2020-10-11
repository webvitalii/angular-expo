import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(items: Array<any>, activePage: number, perPage: number): any {
    if ( !items ) { return []; }
    const from = (activePage - 1) * perPage;
    const to = from + perPage;

    return items.slice(from, to);
  }

}
