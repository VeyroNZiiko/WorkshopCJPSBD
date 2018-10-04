import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scannedData: any = {};
  options: BarcodeScannerOptions;

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
    ) {
  }


  scan() {
    this.barcodeScanner.scan(this.options).then((data) => {
      this.scannedData = data;
      console.log("ok");
    }, (err) => {
      console.log("erreur");
    })
  }

}
