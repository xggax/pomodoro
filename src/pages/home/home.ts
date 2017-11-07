import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('nomeusuario') nomeusuario;
  @ViewChild('senha') senha; 


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

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



}
