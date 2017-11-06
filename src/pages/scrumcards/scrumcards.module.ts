import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScrumcardsPage } from './scrumcards';

@NgModule({
  declarations: [
    ScrumcardsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScrumcardsPage),
  ],
})
export class ScrumcardsPageModule {}
