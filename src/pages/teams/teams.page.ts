import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
    templateUrl: 'teams.page.html'
})
export class TeamsPage {

    teams = [];

    constructor(
        private nav: NavController, 
        private navParams : NavParams,
        private eliteApi: EliteApi
      ){}

    ionViewDidLoad() {
        let selectedTourney = this.navParams.data;

        this.eliteApi.getTournamentData(selectedTourney.id)
            .subscribe(data => {
                this.teams = data.teams;
            })
    }

    itemTapped($event, team) {
        this.nav.push(TeamHomePage, team);
    }
}