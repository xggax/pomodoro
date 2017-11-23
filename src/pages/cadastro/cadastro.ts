import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {


  @ViewChild('nomeusuario') nomeusuario;
  @ViewChild('senha') senha;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }


  alert(mensagem: string){
    this.alertCtrl.create({
      //title: 'Info!',
      subTitle: mensagem,
      buttons: ['OK']
    }).present();
  }


  cadastrarUsuario(){
    this.fire.auth.createUserWithEmailAndPassword(this.nomeusuario.value, this.senha.value)
    .then(data =>{
      console.log('pegou arquivo', data);
      this.alert('Cadastrado com sucesso!');
    })
    .catch(error => {
      console.log('pegou um erro', error);
      this.alert(error.message);
    })

      console.log('cadastrando: ', this.nomeusuario.value, this.senha.value);
  }

}