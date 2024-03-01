import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { CategoryComponent } from './category/category.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {path: 'actor', component: ActorComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'film', component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
