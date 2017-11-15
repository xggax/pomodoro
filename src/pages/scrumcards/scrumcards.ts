import { Component } from '@angular/core';
import {  ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Card1Page } from '../card1/card1';

/**
 * Generated class for the ScrumcardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scrumcards',
  templateUrl: 'scrumcards.html',
})
export class ScrumcardsPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  
  abrirCard1(){
    const modal1 = this.modalCtrl.create('Card1Page');

    modal1.present();
  }

  abrirCard2(){
    const modal2 = this.modalCtrl.create('Card2Page');

    modal2.present();
  }

  abrirCard3(){
    const modal3 = this.modalCtrl.create('Card3Page');

    modal3.present();
  }

  abrirCard5(){
    const modal5 = this.modalCtrl.create('Card5Page');

    modal5.present();
  }

  abrirCard8(){
    const modal8 = this.modalCtrl.create('Card8Page');

    modal8.present();
  }

  abrirCard13(){
    const modal13 = this.modalCtrl.create('Card13Page');

    modal13.present();
  }

  abrirCard21(){
    const modal21 = this.modalCtrl.create('Card21Page');

    modal21.present();
  }

  abrirCard34(){
    const modal34 = this.modalCtrl.create('Card34Page');

    modal34.present();
  }

  abrirCard55(){
    const modal55 = this.modalCtrl.create('Card55Page');

    modal55.present();
  }

  abrirCard89(){
    const modal89 = this.modalCtrl.create('Card89Page');

    modal89.present();
  }

  abrirCard144(){
    const modal144 = this.modalCtrl.create('Card144Page');

    modal144.present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScrumcardsPage');
  }


  
}
