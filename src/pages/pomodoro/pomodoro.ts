import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PomodoroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pomodoro',
  templateUrl: 'pomodoro.html',
})
export class PomodoroPage {
  interval: number;
  public fillerHeight: number;
  public fillerIncrement: number;
  public seconds: number;
  public minutes: number;
  public started: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.started = false;  
    this.minutes = 25;
    this.seconds = 0;
    this.fillerIncrement = 200/(this.minutes*60);
    this.fillerHeight = 0; 
    this.init();
  }

  resetVariables(mins, secs, started){
    this.minutes = mins;
    this.seconds = secs;
    this.started = started;
    this.fillerIncrement = 200/(this.minutes*60);
    this.fillerHeight = 0;  
}
startWork(){
    this.resetVariables(25, 0, true);
};
startShortBreak(){
    this.resetVariables(5, 0, true);
};
startLongBreak(){
    this.resetVariables(15, 0, true);
};
stopTimer(){
    this.resetVariables(25, 0, false);
};
timerComplete(){
    this.started = false;
}
intervalCallback(){  
  if(!this.started) return false;
    if(this.seconds == 0) {
      if(this.minutes == 0) {
        this.timerComplete();
        return;
      }
      this.seconds = 59;
      this.minutes--;
    } else {
      this.seconds--;
    }
    this.fillerHeight += this.fillerIncrement;
};

toDoubleDigit(num){
  return num < 10 ? '0' + parseInt(num,10) : num;
};

init(){
  var self = this;
  this.interval = setInterval( function(){
    self.intervalCallback.apply(self);
  }, 1000);
};

  ionViewDidLoad() {
    console.log('ionViewDidLoad PomodoroPage');
  }

}
