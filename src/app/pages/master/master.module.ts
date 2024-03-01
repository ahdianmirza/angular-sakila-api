import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { ActorComponent } from './actor/actor.component';
import { FilmComponent } from './film/film.component';
import { CategoryComponent } from './category/category.component';
import { LanguageComponent } from './language/language.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogBodyComponent } from './actor/dialog-body/dialog-body.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ActorComponent,
    FilmComponent,
    CategoryComponent,
    LanguageComponent,
    DialogBodyComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
  ],
})
export class MasterModule {}
