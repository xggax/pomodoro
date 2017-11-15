import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Card3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card3',
  templateUrl: 'card3.html',
})
export class Card3Page {

  constructor(private view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }


  fecharModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Card3Page');
  }

}
