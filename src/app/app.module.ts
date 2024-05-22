// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LibrocomponentComponent } from './librocomponent/librocomponent.component'; 
import { LibroService } from './services/libro.service';
import { AppRoutingModule } from './app-routing.module';  // Import the routing module
@NgModule({
  declarations: [
    LibrocomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule  
  ],
  providers: [LibroService],
})
export class AppModule { }
