import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

let config_key_name = "config";

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  config = {
      showSlide: false
  }

  constructor() {
    
  }

  //recupera os dados do localstorage
  getConfigdata(): any{
    return localStorage.getItem(config_key_name);
  }

  //grava os dados do localstorage
  setConfigData(showSlide?: boolean){
    let config = {
      showSlide: false
    };
  
    if(showSlide){
      config.showSlide = showSlide;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  
  }



}
