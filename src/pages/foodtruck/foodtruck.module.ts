import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodtruckPage } from './foodtruck';

@NgModule({
  declarations: [
    FoodtruckPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodtruckPage),
  ],
})
export class FoodtruckPageModule {}
