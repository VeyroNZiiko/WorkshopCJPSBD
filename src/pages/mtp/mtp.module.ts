import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MtpPage } from './mtp';

@NgModule({
  declarations: [
    MtpPage,
  ],
  imports: [
    IonicPageModule.forChild(MtpPage),
  ],
})
export class MtpPageModule {}
