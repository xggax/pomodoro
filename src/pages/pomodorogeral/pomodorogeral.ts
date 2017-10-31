import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PomodoroPage } from '../pomodoro/pomodoro';
import { PomodorosobrePage } from '../pomodorosobre/pomodorosobre';

/**
 * Generated class for the PomodorogeralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pomodorogeral',
  templateUrl: 'pomodorogeral.html',
})
export class PomodorogeralPage {
  
  rootPage = PomodoroPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PomodorogeralPage');
  }

  abrirSobre(){
    this.navCtrl.push(PomodorosobrePage);
  }

  fecharMenu(){
    this.menuCtrl.close();
  }


}
