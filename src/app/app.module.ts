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
    BurndownPageModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider
  ]
})
export class AppModule {}
