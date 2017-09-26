import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
    constructor(private nav: NavController){}

    navigate() {
        this.nav.pop();
    }
}