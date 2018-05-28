import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BaseDatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseDatosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BaseDatosProvider Provider');
  }
    
  public registrar(key: any, obj: any): void {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  public obtener(key: any) {
    let itemString = localStorage.getItem(key);
    return JSON.parse(itemString);
  }

  public crear(key: any, obj: any = {}): string {
    this.registrar(key, obj)
    return key;
  }

  public modificar(key: any, obj: any): void {
    let item = this.obtener(key);
    this.registrar(key, Object.assign(item, obj));
  }

  public delete(key: any): void {
    localStorage.removeItem(key);
  }

}
