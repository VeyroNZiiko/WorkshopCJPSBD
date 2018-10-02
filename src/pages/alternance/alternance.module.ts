import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlternancePage } from './alternance';

@NgModule({
  declarations: [
    AlternancePage,
  ],
  imports: [
    IonicPageModule.forChild(AlternancePage),
  ],
})
export class AlternancePageModule {}
