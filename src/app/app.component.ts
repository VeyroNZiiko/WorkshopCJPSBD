import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
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
  campus: Array<{title: string, component: any}>;
  formations: Array<{title: string, component: any}>;
  vie: Array<{title: string, component: any}>;
  plus: Array<{title: string, component: any}>;
  boolCamp: boolean;
  boolForm: boolean;
  boolPlus: boolean;
  boolVie: boolean;
  choix: Array<{title: string, component: any}>;;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.boolCamp = false;
    this.boolForm = false;
    this.boolPlus = false;
    this.boolVie = false;
        this.campus = [
      { title: 'Espace MY DIL', component: MydilPage },
      { title: 'Les 2 sites géographique', component: SitesPage },
      { title: 'Les espaces de travail', component: TravailPage },
      { title: 'Les espaces de vie', component: ViePage }
    ];

        this.formations = [
      { title: 'L\'alternance', component: AlternancePage },
      { title: 'Les competences', component: CompetencesPage },
      { title: 'Formation continue', component: FormationPage }
    ];

        this.vie = [
      { title: 'BDE', component: BdePage },
      { title: 'Foodtruck', component: FoodtruckPage },
      { title: 'SUAPS', component: SuapsPage }
    ];

        this.plus = [
      { title: 'Nous contacter', component: ContacterPage },
      { title: 'La ville de Montpellier', component: MtpPage },
      { title: 'Le STAFF', component: StaffPage }
    ];

        this.pages = [
      { title: 'Le campus', component: this.campus },
      { title: 'Les formations', component: this.formations },
      { title: 'La vie au campus', component: this.campus },
      { title: 'En savoir plus', component: this.plus }
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
  console.log(page);
  this.nav.setRoot(page.component);
  }

  openList(p){
    if (p.title == "Le campus") {
      this.boolCamp = !this.boolCamp;
    } 
    if (p.title == "Les formations") {
      this.boolForm = !this.boolForm;
    }
    if (p.title == "La vie au campus") {
      this.boolVie = !this.boolVie;
    }
    if (p.title == "En savoir plus") {
      this.boolPlus = !this.boolPlus;
    }
    this.choix = p.component;
  }
}