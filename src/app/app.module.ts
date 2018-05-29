import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { ListadoPage } from '../pages/listado/listado';


import { SQLite } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { BaseDatosProvider } from '../providers/base-datos/base-datos';
//import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
//import { PeliculasProvider } from '../providers/peliculas/peliculas';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    RegistroPage,
    ListadoPage,
  //  MiPerfilPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegistroPage,
    ListadoPage,
  //  MiPerfilPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
   // PeliculasProvider,
    BaseDatosProvider
  ]
})
export class AppModule {}