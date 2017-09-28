import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
    templateUrl: 'game.page.html'
})
export class GamePage {
    
    game: any = {};
    name: any;

    constructor(
        private nav: NavController, 
        private navParams: NavParams,
        private eliteApi: EliteApi
    ){
    }

    ionViewDidLoad(){
        this.game = this.navParams.data;
    }

    teamTapped(teamId) {
        let tourneyData = this.eliteApi.getCurrentTourney();
        // console.log("tourneyData", tourneyData)
        let team = tourneyData.teams.find(t => t.id === teamId);
        this.nav.push(TeamHomePage, team);
    }
}