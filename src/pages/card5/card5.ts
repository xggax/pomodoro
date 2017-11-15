import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Card5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card5',
  templateUrl: 'card5.html',
})
export class Card5Page {

  constructor(private view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  fecharModal(){
    this.view.dismiss();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Card5Page');
  }

}
