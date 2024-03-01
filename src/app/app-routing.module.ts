import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './template/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      {
        path: 'master',
        loadChildren: () =>
          import('./pages/master/master.module').then((m) => m.MasterModule),
      },
      {
        path: 'transaksi',
        loadChildren: () => import('./pages/transaksi/transaksi.module').then((m) => m.TransaksiModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
