import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, ToastController} from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';


/**
 * Generated class for the MiPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'perfilPage',
})
@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html',
})
export class MiPerfilPage {
  public usuario: any; 
  public listaFavoritos: Array<any>;
  public favorito: string;
  public editar: boolean = false; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public baseDatosProvider: BaseDatosProvider, private modalController: ModalController,  public toastCtrl : ToastController) {
   }

  ionViewDidEnter() {
   this.usuario = this.baseDatosProvider.obtener('usuario');
   debugger;
   this.listaFavoritos =  this.baseDatosProvider.obtener('listaFavoritos');
  }
  
    
  public cerrar(): void {
    this.navCtrl.pop();
  }

public verDescripcionFavorito(pelicula: any): void {
  let modalDetalles = this.modalController.create('page-descripcion', { pelicula });
  modalDetalles.present();
}



}
