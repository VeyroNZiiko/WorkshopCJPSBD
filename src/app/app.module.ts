import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { GoogleMaps } from '@ionic-native/google-maps'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    AlternancePage,
    BdePage,
    CompetencesPage,
    ContacterPage,
    FoodtruckPage,
    FormationPage,
    MtpPage,
    MydilPage,
    SitesPage,
    StaffPage,
    SuapsPage,
    TravailPage,
    ViePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    AlternancePage,
    BdePage,
    CompetencesPage,
    ContacterPage,
    FoodtruckPage,
    FormationPage,
    MtpPage,
    MydilPage,
    SitesPage,
    StaffPage,
    SuapsPage,
    TravailPage,
    ViePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
