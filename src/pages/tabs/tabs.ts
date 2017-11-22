import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//import { PomodoroPage } from '../pomodoro/pomodoro';
import { PomodorogeralPage } from '../pomodorogeral/pomodorogeral';
import { BurndownPage } from '../burndown/burndown';
import { ScrumcardsPage } from '../scrumcards/scrumcards';
import { PerfilPage } from '../perfil/perfil';
import { ListatarefasPage } from '../listatarefas/listatarefas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PerfilPage; 
  tab2Root = PomodorogeralPage;
  tab3Root = BurndownPage;
  tab4Root = ScrumcardsPage;
  tab5Root = ListatarefasPage;

  constructor() {

  }
}
