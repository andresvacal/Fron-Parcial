// src/app/components/librocomponent/librocomponent.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Libro } from '../models/libro.model';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-librocomponent',
  templateUrl: './librocomponent.component.html',
  styleUrls: ['./librocomponent.component.css']
})
export class LibrocomponentComponent {
  libro: Libro = new Libro(0, '', '', new Date(), 0, 0, '', '');

  constructor(private libroService: LibroService) {}

  onSubmit(): void {
    this.libroService.guardarlibro(this.libro).subscribe(response => {
      console.log('Libro guardado:', response);
      // Optionally, reset the form or give user feedback
    });
  }
}
