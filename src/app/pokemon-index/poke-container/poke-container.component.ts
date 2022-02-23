import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-poke-container',
  templateUrl: './poke-container.component.html',
  styleUrls: ['./poke-container.component.css']
})
export class PokeContainerComponent implements OnInit {
  @Input() myPokemon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
