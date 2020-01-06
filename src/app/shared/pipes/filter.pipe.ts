import { Pipe, PipeTransform } from '@angular/core';
import { Postcode } from 'src/app/models/postcode';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Postcode[], searchText: string): Postcode[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.postcode.toLowerCase().includes(searchText);
    });
   }
}
