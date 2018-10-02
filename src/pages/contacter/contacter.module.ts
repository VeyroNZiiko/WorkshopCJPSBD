import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContacterPage } from './contacter';

@NgModule({
  declarations: [
    ContacterPage,
  ],
  imports: [
    IonicPageModule.forChild(ContacterPage),
  ],
})
export class ContacterPageModule {}
