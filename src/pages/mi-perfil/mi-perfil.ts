import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';


/**
 * Generated class for the MiPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html',
})
export class MiPerfilPage {
  public  usuario: any; 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public BaseDatosProvider: BaseDatosProvider, private modalController: ModalController) {
    this.usuario = this.BaseDatosProvider.obtener('usuario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiPerfilPage');
  }
  
    ionViewDidEnter(){
      this.usuario = this.BaseDatosProvider.obtener('usuario');
    }

 
    // public verDetalle(movie: any): void {
    //   let modalDetails = this.modalController.create('page-details', { movie });
    //   modalDetails.present();
    // }
  

}
