import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { ListadoPage } from '../listado/listado';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public datosLogin: any;
  private sppinerLoading: Loading;
  private storage: Storage;


  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController
  ) {
    this.datosLogin = {
      usuario: '',
      contrasenia:''
    };
    this.storage = (window as any).localStorage;
  }

  // Para controlar cantidad de caracteres
  public login(params): void {
    if (this.datosLogin.usuario.length < 5 || this.datosLogin.contrasenia.length < 4) {
      // llamo al mensaje de error para visualizarlo en la pantalla
      this.mensajeError();
    }
    else {
      this.mostrarLoading('Iniciando Sesión');

      setTimeout(() => {
        this.storage.setItem('session', '{auth_token: alagrandelepusecuca}');
        this.storage.clear();
        this.hideLoading();
        this.navCtrl.setRoot(ListadoPage);
      }, 850);
    }
  }

  goToRegistro(params) {
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }

  goToListado(params) {
    if (!params) params = {};
    console.log('Datos login', this.datosLogin);
    this.navCtrl.push('listadoPage');
  }

  private mostrarLoading(message?): void {
    this.sppinerLoading = this.loadingCtrl.create({
      content: message,
    });
    this.sppinerLoading.present();
  }

  private hideLoading(): void {
    if (this.sppinerLoading) {
      this.sppinerLoading.dismiss();
      this.sppinerLoading = null;
    }
  }

  public mensajeError(): void {
    let toastError = this.toastCtrl.create({
      message: 'Error en la validación del usuario o contraseña',
      duration: 1000,
      position: 'bottom',
    });
    toastError.present();
  }
}