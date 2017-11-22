import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { TarefasPage } from '../tarefas/tarefas';
import { Storage } from '@ionic/storage';


//@IonicPage()
@Component({
  selector: 'page-listatarefas',
  templateUrl: 'listatarefas.html',
})

export class ListatarefasPage {

  addedToDoList:any[] = [];
  tempTodos:any = '';
  todo = TarefasPage;
  constructor(public navCtrl: NavController, public storage: Storage){
     console.log("Inside constructor");
     this.storage.get('todoDetails').then((val) => {
      console.log("Val in home"+val);
      this.addedToDoList = val;
     });
  }
  testObj = {
    "title":"",
    "description": ""
  }

    
/* Essa função sempre obterá dados do localstorage quando
    esta página será carregada */

    ngOnInit():void{

        this.storage.get('todoDetails').then((val) => {
          console.log("Val in home init"+val);
          this.addedToDoList = val;
        }); 
    }
    
    
/* Esta função sempre obterá dados do localstorage quando esta página estiver prestes a entrar
    e se tornar uma página ativa */

    ionViewWillEnter(){
      this.storage.get('todoDetails').then((val) => {
        this.addedToDoList = val;
      });    
    } 
    
    
/* 
Esta função sempre obterá dados do localstorage quando esta página estiver totalmente inserida
    e agora página ativa */

    ionViewDidEnter() {
      this.storage.get('todoDetails').then((val) => {
        this.addedToDoList = val;
      }); 
    }

  
/* Esta função irá navegar para a próxima página */

  goToAddTodo():void{
      this.navCtrl.push(TarefasPage);
  }

  
/* Esta função irá remover o item selecionado */

  removeItem(todo):void{
    let index = this.addedToDoList.indexOf(todo);
    if(index>-1){
      this.addedToDoList.splice(index,1);
      this.storage.set('todoDetails',this.addedToDoList);
    } 
  }
}
