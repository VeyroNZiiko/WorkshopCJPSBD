import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, LatLng, GoogleMap, GoogleMapsEvent, MarkerOptions, Marker/*,CameraPosition */} from '@ionic-native/google-maps';
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

  	let ionic: LatLng = new LatLng(43.0741904,-89.3809802);
/*
  	let position : CameraPosition = {
  		target:ionic,
  		zoom:18,
  		tilt:30,
      bearing:40
  	};

  	map.moveCamera(position);*/

  	let markerOptions :MarkerOptions = {
  		position: ionic,
  		title: 'Ionic'
  	};

  	map.addMarker(markerOptions)
  	.then((marker:Marker) => {
  		marker.showInfoWindow();
  		});
  	
  }

}
