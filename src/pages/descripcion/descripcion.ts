import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'page-descripcion',
  segment: 'page-descripcion' 
})
@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html'
})
export class DescripcionPage {

  public pelicula: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pelicula = this.navParams.get('pelicula');
  }


  public cerrar(): void {
    this.navCtrl.pop();
  }

  
}
