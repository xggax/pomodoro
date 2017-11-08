import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }



  cadastrarUsuario(){
    this.fire.auth.createUserWithEmailAndPassword(this.nomeusuario.value, this.senha.value)
    .then(data =>{
      console.log('pegou arquivo', data);
    })
    .catch(error => {
      console.log('pegou um erro', error);
    })

      console.log('cadastrando: ', this.nomeusuario.value, this.senha.value);
  }

}