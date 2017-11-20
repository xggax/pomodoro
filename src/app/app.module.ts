import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PomodoroPageModule } from '../pages/pomodoro/pomodoro.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import {HttpModule} from "@angular/http";
import { ConfigProvider } from '../providers/config/config';
import { PomodorogeralPageModule } from '../pages/pomodorogeral/pomodorogeral.module';
import { PomodorosobrePageModule } from '../pages/pomodorosobre/pomodorosobre.module';
import { BurndownPageModule } from '../pages/burndown/burndown.module';
import { ScrumcardsPageModule } from '../pages/scrumcards/scrumcards.module';
import { LoginPageModule } from '../pages/login/login.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AuthData } from '../providers/auth/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RecuperarPage } from '../pages/recuperar/recuperar';
import { RecuperarPageModule } from '../pages/recuperar/recuperar.module';


const firebaseAuth = {
  apiKey: "AIzaSyC3CCU6rdRrvhvgDsdUcvZCHu2Psv8Talo",
  authDomain: "eduscrum-a1e71.firebaseapp.com",
  databaseURL: "https://eduscrum-a1e71.firebaseio.com",
  projectId: "eduscrum-a1e71",
  storageBucket: "eduscrum-a1e71.appspot.com",
  messagingSenderId: "251682295628"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PomodoroPageModule,
    IntroPageModule,
    HttpModule,
    PomodorogeralPageModule,
    PomodorosobrePageModule,
    BurndownPageModule,
    ScrumcardsPageModule,
    LoginPageModule,
    CadastroPageModule,
    RecuperarPageModule,
    PerfilPageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //AuthData,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
  ]
})
export class AppModule {}
