import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  apiEndpoint = 'http://localhost:8080/libros/';
  constructor(private http:HttpClient) { }

  guardarlibro(obj:any){
    console.log(obj);
   return this.http.post(this.apiEndpoint + 'guardarlibro', obj)
  }

  ObtenerPropiedades() {
return this.http.get(this.apiEndpoint + 'verlibros');
  }
 
}
