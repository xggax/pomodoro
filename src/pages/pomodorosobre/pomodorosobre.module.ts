import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PomodorosobrePage } from './pomodorosobre';

@NgModule({
  declarations: [
    PomodorosobrePage,
  ],
  imports: [
    IonicPageModule.forChild(PomodorosobrePage),
  ],
})
export class PomodorosobrePageModule {}
