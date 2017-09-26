import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamDetailPage } from '../pages';

@Component({
    templateUrl: 'teams.page.html'
})
export class TeamsPage {
    constructor(private nav: NavController){}

    itemTapped() {
        this.nav.push(TeamDetailPage);
    }
}