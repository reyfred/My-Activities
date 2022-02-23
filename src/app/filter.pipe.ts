import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if(value=== 0 || filterString === ""){
      return value;
    }
    const pokemon: any = []
    for(const thisPokemon of value){
      if(thisPokemon['name'] === filterString || thisPokemon.types[0].type['name'] === filterString){
        pokemon.push(thisPokemon)
      }
  }
    return pokemon;
  }

}
