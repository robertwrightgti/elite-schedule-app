import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { TeamHomePage, MyTeamsPage } from '../pages/pages';
import { EliteApi, UserSettings } from '../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers: [
    EliteApi,
    UserSettings,
    HttpModule
  ]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any[]; 
  rootPage: any = MyTeamsPage;

  constructor(
    private events: Events,
    public platform: Platform, 
    private loadingController: LoadingController,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public eliteApi: EliteApi,
    public userSettings: UserSettings) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavorites();
      this.events.subscribe("favorites:changed", () => this.refreshFavorites());
    });
  }

  refreshFavorites() {
    this.userSettings.getAllFavorites().then(favs => this.favoriteTeams = favs);
  }

  goHome() {
    this.nav.popToRoot();
  }

  goToTeam(favorite) {
    let loader = this.loadingController.create({
      content: "Getting data...",
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(
      l => this.nav.push(TeamHomePage, favorite.team)
    );
  }
}