import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage, MapPage } from '../pages';
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
        this.game.gameTime = Date.parse(this.game.time);
    }

    teamTapped(teamId) {
        let tourneyData = this.eliteApi.getCurrentTourney();
        let team = tourneyData.teams.find(t => t.id === teamId);
        this.nav.push(TeamHomePage, team);
    }

    goToDirections() {
        //todo!
    }

    goToMap() {
        this.nav.push(MapPage, this.game);
    }

    isWinner(score1, score2) {
        return Number(score1) > Number(score2) ? 'secondary' : '';
    }
}