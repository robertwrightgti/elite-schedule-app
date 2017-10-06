import { Component } from '@angular/core';
import { LoadingController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
declare var window: any;

@Component({
    templateUrl: 'map.page.html'
})
export class MapPage {

    map: any = {};

    constructor(
        private navParams: NavParams, 
        private loadingController: LoadingController,
        private eliteApi: EliteApi
    ){}

    ionViewDidLoad() {
        let games = this.navParams.data;
        let tourneyData = this.eliteApi.getCurrentTourney();
        let location = tourneyData.locations[games.locationId];

        this.map = {
            lat: location.latitude,
            lng: location.longitude,
            zoom: 12,
            markerLabel: games.location
        }; 
    }

    getDirections() {
        console.log("directions")
        window.location = `geo:${this.map.lat},${this.map.lng};u=35`;
    }
}