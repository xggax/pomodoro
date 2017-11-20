import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ConfigProvider} from "../providers/config/config";

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  //items: AngularFireList<{}>;
  rootPage:any = IntroPage;
  //rootPage:any
  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              configProvider: ConfigProvider,
              private firebase: AngularFireAuth
              //private afDb: AngularFireDatabase
            ) {
              let config = configProvider.getConfigdata();
              const unsubscribe = this.firebase.auth.onAuthStateChanged( user => {
                if (!user && config == null) {
                  this.rootPage = IntroPage;
                  configProvider.setConfigData(false);
                  unsubscribe();
                  console.log(unsubscribe);
                } else { 
                  this.rootPage = HomePage;
                  unsubscribe();
                  console.log(unsubscribe);
                }
              });
              platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      /*
      let config = configProvider.getConfigdata();
      if(config == null){
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);
      }else{
        
          this.rootPage = HomePage;
      }
      console.log(config);
      */


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  

  /*ngOnInit(){
  this.items = this.afDb.list('/perfil'); 
            
  }*/


}
