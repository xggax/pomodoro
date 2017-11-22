import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListatarefasPage } from './listatarefas';

@NgModule({
  declarations: [
    ListatarefasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListatarefasPage),
  ],
})
export class ListatarefasPageModule {}
