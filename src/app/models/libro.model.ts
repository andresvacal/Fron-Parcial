// src/app/models/libro.model.ts

export class Libro {
    id: number;
    nombre: string;
    autor: string;
    fechaEscritura: Date;
    edicion: number;
    precio: number;
    tipoLibro: string;
    famaEscritor: string;
  
    constructor(
      id: number,
      nombre: string,
      autor: string,
      fechaEscritura: Date,
      edicion: number,
      precio: number,
      tipoLibro: string,
      famaEscritor: string
    ) {
      this.id = id;
      this.nombre = nombre;
      this.autor = autor;
      this.fechaEscritura = fechaEscritura;
      this.edicion = edicion;
      this.precio = precio;
      this.tipoLibro = tipoLibro;
      this.famaEscritor = famaEscritor;
    }
  }
  