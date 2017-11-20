import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import {App} from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(private app: App, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  alert(mensagem: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: mensagem,
      buttons: ['OK']
    }).present();
  }

  signOut(){
    this.fire.auth.signOut().then(data => {
      console.log(this.fire.auth.signOut());
      this.alert('deslogado com sucesso!');
      //solução temporária com "getRootNav" para voltar para a página sem abas
      this.app.getRootNav().setRoot(HomePage);
      //this.navCtrl.setRoot(HomePage);
    }).catch( error=> {
      this.alert(error.message);
    })
  }

}
