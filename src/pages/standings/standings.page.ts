import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as _ from 'lodash';

//import { TeamDetailPage } from '../pages';
import { EliteApi } from '../../shared/shared';


@Component({
    templateUrl: 'standings.page.html'
})
export class StandingsPage {

    standings: any = [];
    team: any;
    allStandings: any;
    divisionFilter = "";

    constructor(
        private nav: NavController,
        private navParams: NavParams,
        private eliteApi: EliteApi
    ){}

    ionViewDidLoad() {
        this.team = this.navParams.data;
        let tourneyData = this.eliteApi.getCurrentTourney();
        this.standings = tourneyData.standings;
        
        // this.allStandings = 
        //     _.chain(this.standings)
        //     .groupBy('division')
        //     .toPairs()
        //     .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
        //     .value();
        
        //console.log("standings", this.standings)
        this.allStandings = tourneyData.standings;
        this.filterDivision();
    }

    //get header (division name) for teams in virtual scroll
    getHeader(record, recordIndex, records) {
        if (recordIndex === 0 || record.division !== records[recordIndex-1].division) {
            return record.division;
        }
        return null;
    }

    filterDivision() {
        if(this.divisionFilter === "all") {
            this.standings = this.allStandings;
        } else {
            this.standings = _.filter(this.allStandings, s => s.division === this.team.division);
        }
    }
}