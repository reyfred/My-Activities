import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { PokedexComponent } from './pokemon-index/pokedex/pokedex.component';
import { PoemsComponent } from './poems/poems/poems.component';
import { HomeComponent } from './Home/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about me', component: AboutMeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'data', component: DataTableComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'poems', component: PoemsComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
