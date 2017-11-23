import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  @ViewChild('nomeusuario') nomeusuario;
  @ViewChild('senha') senha;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  alert(mensagem: string){
    this.alertCtrl.create({
      //title: 'Info!',
      subTitle: mensagem,
      buttons: ['OK']
    }).present();
  }
  
  
  acessarUsuario() {
    this.fire.auth.signInWithEmailAndPassword(this.nomeusuario.value, this.senha.value)
      .then(data => {
        console.log('pegou o data', data);
        this.alert('Agora você está logado!');
        this.navCtrl.setRoot(TabsPage);
        //usuario está logado
      })
      .catch(error => {

        console.log('pegou um erro', error);
        this.alert(error.message);
      })

    console.log('Acessando com: ', this.nomeusuario.value, this.senha.value);

  }

}
