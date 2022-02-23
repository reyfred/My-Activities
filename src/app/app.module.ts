import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PokedexComponent } from './pokemon-index/pokedex/pokedex.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { PoemsComponent } from './poems/poems/poems.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home/home.component';
import { PokeContainerComponent } from './pokemon-index/poke-container/poke-container.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    DataTableComponent,
    ProjectsComponent,
    AboutMeComponent,
    SkillsComponent,
    PokedexComponent,
    FilterPipe,
    PoemsComponent,
    HomeComponent,
    PokeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [

  ]
})
export class AppModule { }
