import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BurndownPage } from './burndown';

@NgModule({
  declarations: [
    BurndownPage,
  ],
  imports: [
    IonicPageModule.forChild(BurndownPage),
  ],
})
export class BurndownPageModule {}
