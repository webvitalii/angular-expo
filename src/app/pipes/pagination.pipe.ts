import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(items: Array<any>, activePage: number, perPage: number): any {
    if ( !items ) { return []; }
    let from = (activePage - 1) * perPage;
    let to = from + perPage;

    return items.slice(from, to);
  }

}
