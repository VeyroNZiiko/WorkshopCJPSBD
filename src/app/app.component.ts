import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestPage } from '../pages/test/test';
import { AlternancePage } from '../pages/alternance/alternance';
import { BdePage } from '../pages/bde/bde';
import { CompetencesPage } from '../pages/competences/competences';
import { ContacterPage } from '../pages/contacter/contacter';
import { FoodtruckPage } from '../pages/foodtruck/foodtruck';
import { FormationPage } from '../pages/formation/formation';
import { MtpPage } from '../pages/mtp/mtp';
import { MydilPage } from '../pages/mydil/mydil';
import { SitesPage } from '../pages/sites/sites';
import { StaffPage } from '../pages/staff/staff';
import { SuapsPage } from '../pages/suaps/suaps';
import { TravailPage } from '../pages/travail/travail';
import { ViePage } from '../pages/vie/vie';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'En savoir plus', component: TestPage },
      { title: 'L\'alternance', component: AlternancePage },
      { title: 'BDE', component: BdePage },
      { title: 'Les competences', component: CompetencesPage },
      { title: 'Nous contacter', component: ContacterPage },
      { title: 'Foodtruck', component: FoodtruckPage },
      { title: 'Formation continue', component: FormationPage },
      { title: 'La ville de Montpellier', component: MtpPage },
      { title: 'Espace MyDil', component: MydilPage },
      { title: 'Les 2 sites géographique', component: SitesPage },
      { title: 'Le STAFF', component: StaffPage },
      { title: 'SUAPS', component: SuapsPage },
      { title: 'Les espaces de travail', component: TravailPage },
      { title: 'Les espaces de vie', component: ViePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
