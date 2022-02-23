import { Component, OnInit, Input } from '@angular/core';
import { findIndex, Observable, withLatestFrom } from 'rxjs';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  public pokemons: any[] = [];
  public pokeball: any;
  public filterPokemon = '';

  constructor(
    private pokeData: PokemonDataService,
    public dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.allPokemon();
    this.pokeball
  }
  allPokemon(): any {
    this.pokeData.getPokemon().subscribe((response: any) => {
      console.log('APi', response);
      response.results.forEach((result: any) => {
        this.pokeData.getPokemonName(result.name).subscribe((res) => {
          this.pokemons.push(res);
          const findLucario = this.pokemons.find(poke => poke.name === 'lucario')
          this.pokeball = findLucario
        });
      });
    });
  }
  sendPokeball(monsters:any){
    console.log('monsters',monsters)
    this.pokeball = monsters
  }
}
