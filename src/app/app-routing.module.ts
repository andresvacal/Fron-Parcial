// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrocomponentComponent } from './librocomponent/librocomponent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'libros',
    pathMatch: 'full'
  },
  {
    path: 'libros',
    component: LibrocomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
