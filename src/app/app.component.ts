import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListadoPage } from '../pages/listado/listado';
import { SQLite } from '@ionic-native/sqlite';
import { BaseDatosProvider } from '../providers/base-datos/base-datos';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    public usuario: null;
    rootPage:any;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public sqlite: SQLite, 
   private baseDatos: BaseDatosProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.usuario = this.baseDatos.obtener('usuario');
      if(this.usuario){
        this.rootPage = ListadoPage;
      }else{
        this.rootPage = LoginPage;
      }
    });
  }
  
  private createBaseDatos(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((database) => {
      console.log(database);
    })
    .catch(error =>{
      console.error(error);
    });
  }
}
