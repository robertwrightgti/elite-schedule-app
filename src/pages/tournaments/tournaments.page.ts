import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamsPage } from '../pages';

@Component({
    templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
    constructor(private nav: NavController){}

    itemTapped() {
        this.nav.push(TeamsPage)
    }
}