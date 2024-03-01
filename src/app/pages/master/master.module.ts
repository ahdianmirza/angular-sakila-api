import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { ActorComponent } from './actor/actor.component';
import { FilmComponent } from './film/film.component';
import { CategoryComponent } from './category/category.component';
import { LanguageComponent } from './language/language.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ActorComponent,
    FilmComponent,
    CategoryComponent,
    LanguageComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class MasterModule {}
