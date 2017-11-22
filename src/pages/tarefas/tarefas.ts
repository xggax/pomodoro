import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ListatarefasPage } from '../listatarefas/listatarefas';

//@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  title:any;
  description:any;

  addedToDo:any[]=[];

  constructor(public navCtrl: NavController,public storage: Storage) {
      this.storage = storage;
  }

  
/* saveRecords() will save the entered values to localstorage*/

  saveRecords():void{

    let todoObj = {
      title:"",
      description:""
    };
    todoObj.title = this.title;
    todoObj.description = this.description;


    this.storage.get('todoDetails').then((val) => {
    
      if(val){
        this.addedToDo = val;
        console.log(todoObj);
        this.addedToDo.push(todoObj);
        this.storage.set('todoDetails', this.addedToDo);
      }else{
        this.addedToDo.push(todoObj);
        this.storage.set('todoDetails', this.addedToDo);
      }
    });

    this.title="";
    this.description="";

    this.navCtrl.pop();
  }  
}