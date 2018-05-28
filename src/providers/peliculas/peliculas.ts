// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

// /*
//   Generated class for the PeliculasProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class PeliculasProvider {

//   private nombrePelicula: any;

//   constructor(public http: HttpClient) {
//     this.nombrePelicula = 'Holaaaa';
//     console.log('Hello DataProvider Provider');
//   }

//   public setNombrePelicula(titulo: string):void{
//     this.nombrePelicula = titulo;
//   }

//   public getNombrePelicula(): string {
//     return this.nombrePelicula;
//   }

//   //metodo para buscar la pelicula
//   public buscarPelicula(nombre: any): Observable<any> {
//     let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=347244bd&s=' + nombre
//    // let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=347244bd'
//     //'http://www.omdbapi.com/?apikey=cf36c0f0&s=' + nombre
//     return this.http.get(url).map((lista:Response) =>{
//       return lista;
//     });
//   }


// }
