import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Card89Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card89',
  templateUrl: 'card89.html',
})
export class Card89Page {

  constructor(private view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  fecharModal89(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Card89Page');
  }

}
