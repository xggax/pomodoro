import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PomodoroPage } from '../pomodoro/pomodoro';
import { PomodorogeralPage } from '../pomodorogeral/pomodorogeral';
import { BurndownPage } from '../burndown/burndown';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PomodorogeralPage;
  tab3Root = BurndownPage;

  constructor() {

  }
}
