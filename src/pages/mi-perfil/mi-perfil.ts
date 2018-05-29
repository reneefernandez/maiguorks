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
  public  usuario: any; 
  public listaFavoritos: Array<any>;
  public favorito: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public BaseDatosProvider: BaseDatosProvider, private modalController: ModalController,  public toastCtrl : ToastController) {
    this.usuario = this.BaseDatosProvider.obtener('usuario');
    this.listaFavoritos = this.BaseDatosProvider.obtener('favoritos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiPerfilPage');
  }
  
    ionViewDidEnter(){
      this.usuario = this.BaseDatosProvider.obtener('usuario');
    }
    
  public cerrar(): void {
    this.navCtrl.pop();
  }


public verDescripcionFavorito(pelicula: any): void {
  let modalDetalles = this.modalController.create('page-descripcion', { pelicula });
  modalDetalles.present();
}

}
