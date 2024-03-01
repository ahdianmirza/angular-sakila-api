import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaksiRoutingModule } from './transaksi-routing.module';
import { RentalComponent } from './rental/rental.component';


@NgModule({
  declarations: [
    RentalComponent
  ],
  imports: [
    CommonModule,
    TransaksiRoutingModule
  ]
})
export class TransaksiModule { }
