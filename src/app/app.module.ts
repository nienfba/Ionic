import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MoviesListPage } from '../pages/movies-list/movies-list';
import { CommentairesPage } from '../pages/commentaires/commentaires';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { Flashlight } from '@ionic-native/flashlight';
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	  MoviesListPage,
    CommentairesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	  MoviesListPage,
    CommentairesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Camera,
	Flashlight,
	Geolocation,
	SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
