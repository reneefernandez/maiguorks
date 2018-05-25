import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ModalController, LoadingController, ToastController } from 'ionic-angular';


import { DataProvider } from '../../providers/data/data';



@IonicPage({
  name: 'listadoPage',
})

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {

  public listadoPeliculas;
  public arrayPeliculas: any = [];
  public buscador: any = [];
  public peliculas: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public dataProvider: DataProvider,
     private modalCtrl: ModalController,
     public loadingController: LoadingController, 
     public toastCtrl : ToastController,
     ) {
  this.arrayPeliculas = []; 
  }
  
  ionViewDidLoad(){
    
  }

  public obtenerPelicula(evento:any): void{
    if(this.buscador === ''){
      return;
    }
    let loading = this.loadingController.create();
    loading.present();
    this.dataProvider.buscarPelicula(this.buscador).subscribe(
      res => {
        loading.dismiss();
        if (res.Search) {
          this.peliculas = res.Search;
        }
        else {
          let toastError = this.toastCtrl.create({
            message: 'Película no encontrada, por favor ingrese una nueva',
            duration: 1500,
            position: 'bottom'
          });
          this.peliculas = [];
          toastError.present();
        }
      },
      err => {
        let toastError = this.toastCtrl.create({
          message: 'Algo salio mal.',
          duration: 1500,
          position: 'bottom'
        })
        toastError.present();
      }
    );
  }

}
