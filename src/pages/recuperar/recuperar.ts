import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the RecuperarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html',
})
export class RecuperarPage {

  @ViewChild('nomeusuario') nomeusuario;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,private fire: AngularFireAuth) {
  }
  
  alertRedef(mensagem: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: mensagem,
      buttons: ['OK']
    }).present();
  }

  resetarSenha(){
    
    const auth = this.fire.auth;
    const emailAddress = this.nomeusuario.value;
    
    auth.sendPasswordResetEmail(emailAddress).then(data=> {
      console.log(emailAddress);
      this.alertRedef('Um email de redefinição de senha foi enviado!');
      this.navCtrl.setRoot(HomePage);
      // Email sent.
      console.log(emailAddress);
    }).catch(error => {
      // An error happened.
      this.alertRedef(error.message);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarPage');
  }

}
