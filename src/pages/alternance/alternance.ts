import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';



/**
 * Generated class for the AlternancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alternance',
  templateUrl: 'alternance.html',
})
export class AlternancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goHomePage() {
     this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlternancePage');
  }

}
