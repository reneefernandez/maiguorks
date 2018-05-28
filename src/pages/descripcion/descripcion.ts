import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'page-descripcion',
  segment: 'page-descripcion' 
})
@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html'
})
export class DescripcionPage {

  constructor(public navCtrl: NavController) {
  }
  
}
