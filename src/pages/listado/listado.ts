import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ModalController, LoadingController, ToastController, MenuController } from 'ionic-angular';


import { DataProvider } from '../../providers/data/data';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';



@IonicPage({
  name: 'listadoPage',
})

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {

  public arrayPeliculas: Array<any>;
  public search: string;
  public isSearchbarOpened = false;
  public listaFavoritos: Array<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public dataProvider: DataProvider,
     private modalCtrl: ModalController,
     public loadingController: LoadingController, 
     public toastCtrl : ToastController,
     public menuCtrl: MenuController,
     public baseDatos: BaseDatosProvider
     ) {
  
  }
  
  ionViewDidLoad(){
    //this.arrayPeliculas = {"Search":[{"Title":"The Avengers","Year":"2012","imdbID":"tt0848228","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg"},{"Title":"Avengers: Age of Ultron","Year":"2015","imdbID":"tt2395427","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},{"Title":"Avengers: Infinity War","Year":"2018","imdbID":"tt4154756","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"},{"Title":"The Avengers","Year":"1998","imdbID":"tt0118661","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},{"Title":"The Avengers: Earth's Mightiest Heroes","Year":"2010–2012","imdbID":"tt1626038","Type":"series","Poster":"https://ia.media-imdb.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"},{"Title":"Ultimate Avengers","Year":"2006","imdbID":"tt0491703","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BMjY0Mzg1NDAtZmVmNC00NDIyLTk4YjEtYzU4ZTU2ZTZkMDc0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Ultimate Avengers II","Year":"2006","imdbID":"tt0803093","Type":"movie","Poster":"https://ia.media-imdb.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"The Avengers","Year":"1961–1969","imdbID":"tt0054518","Type":"series","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjkwMzMzOTQxMF5BMl5BanBnXkFtZTcwNjQzMzIzMQ@@._V1_SX300.jpg"},{"Title":"Avengers Assemble","Year":"2013–","imdbID":"tt2455546","Type":"series","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"},{"Title":"Next Avengers: Heroes of Tomorrow","Year":"2008","imdbID":"tt1259998","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NjExNjY4N15BMl5BanBnXkFtZTcwNTczODkwNQ@@._V1_SX300.jpg"}],"totalResults":"91","Response":"True"};

  }

  public obtenerPelicula(evento:any): void{
    if(this.search === ''){
      return;
    }
    let loading = this.loadingController.create();
    loading.present();
    this.dataProvider.buscarPelicula(this.search).subscribe(
      lista => {
        loading.dismiss();
        if (lista.Search) {
          this.arrayPeliculas = lista.Search;
          console.log(this.arrayPeliculas);
          
        }
        else {
          let toastError = this.toastCtrl.create({
            message: 'Película no encontrada, por favor ingrese una nueva',
            duration: 1500,
            position: 'bottom'
          });
          this.arrayPeliculas = [];
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

  openMenu() {
    this.menuCtrl.open();
  }
 

  public verDescripcion(pelicula: any): void {
    let modalDetalles = this.modalCtrl.create('page-descripcion', { pelicula });
    modalDetalles.present();
  }

  public agregarFavoritos(pelicula: any) {
    let existeFavoritos = this.baseDatos.obtener('listaFavoritos');   
    if (!existeFavoritos){
      this.baseDatos.crear('listaFavoritos',[]);
      
    }
    this.listaFavoritos = this.baseDatos.obtener('listaFavoritos');   

    
    this.listaFavoritos.push(pelicula);
    this.baseDatos.modificar('listaFavoritos', this.listaFavoritos);

    let toastFavoritos = this.toastCtrl.create({
      message: 'Se agrego esta peli a favoritos.',
      duration: 1000,
      position: 'bottom'
    });
    toastFavoritos.present();

  }



  
}
