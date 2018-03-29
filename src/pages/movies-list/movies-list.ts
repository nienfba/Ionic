import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { HomePage } from '../home/home';

/**
 * Generated class for the MoviesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-list',
  templateUrl: 'movies-list.html',
})
export class MoviesListPage {


  tab1: any;
  tab2: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
	this.tab1 = ListPage;
    this.tab2 = HomePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesListPage');
  }

}
