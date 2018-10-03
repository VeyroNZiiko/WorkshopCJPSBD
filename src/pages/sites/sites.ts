import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, LatLng, GoogleMap, GoogleMapsEvent, MarkerOptions, Marker,CameraPosition } from '@ionic-native/google-maps';
import { Component } from "@angular/core/";


@IonicPage()
@Component({
  selector: 'page-sites',
  templateUrl: 'sites.html',
})
export class SitesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  	platform.ready().then(()=> {
  		this.loadMap();
  	});
  }


/*  ionViewDidLoad() {
    console.log('ionViewDidLoad SitesPage');
    this.loadMap();
  }
*/
  loadMap(){
  	let element: HTMLElement = document.getElementById('map');

  	let map: GoogleMap = GoogleMaps.create(element);

  	map.one(GoogleMapsEvent.MAP_READY).then(
  		()=>{
  		console.log("Map is ready");
  		});

  	let coord: LatLng = new LatLng(43.0741904,-89.3809802);

  	let position : CameraPosition<LatLng> = {
  		target: {lat:43.0741904 , lng : -89.3809802},
      zoom: 10
  	};

 /*   let position : CameraPosition = new CameraPosition(coord,18,30,40);*/

  	map.moveCamera(position);

  	let markerOptions :MarkerOptions = {
  		position: coord,
  		title: 'Ionic'
  	};

  	map.addMarker(markerOptions)
  	.then((marker:Marker) => {
  		marker.showInfoWindow();
  		});
  	
  }

}
