import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViePage } from './vie';

@NgModule({
  declarations: [
    ViePage,
  ],
  imports: [
    IonicPageModule.forChild(ViePage),
  ],
})
export class ViePageModule {}
