import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';

import { AngularFireDatabase, /*AngularFireList*/ } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { RecuperarPage } from '../recuperar/recuperar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('nomeusuario') nomeusuario;
  @ViewChild('senha') senha; 
  //items: AngularFireList<{}>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private afDb: AngularFireDatabase) {

  }

  /*ngOnInit(){
    this.items = this.afDb.list('/perfil'); 
              
    }*/

  acessar(){
    /*if(this.nomeusuario.value == "admin" && this.senha.value == "admin"){
    let alert = this.alertCtrl.create({
      title: 'Login com sucesso!',
      subTitle: 'Você está logado!',
      buttons: ['OK']
    });
    alert.present();
  }*/
  this.navCtrl.push(LoginPage);

}
  
cadastrar(){
  /*if(this.nomeusuario.value == "admin" && this.senha.value == "admin"){
  let alert = this.alertCtrl.create({
    title: 'Login com sucesso!',
    subTitle: 'Você está logado!',
    buttons: ['OK']
  });
  alert.present();
}*/
this.navCtrl.push(CadastroPage);

}

recuperar(){
  this.navCtrl.push(RecuperarPage);
}


}
