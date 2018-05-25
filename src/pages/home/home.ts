import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { ListadoPage } from '../listado/listado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToRegistro(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }goToListado(params){
    if (!params) params = {};
    this.navCtrl.push(ListadoPage);
  }
  
}
