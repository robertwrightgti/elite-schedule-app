import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MapPage, MyTeamsPage, TournamentsPage, TeamsPage, TeamHomePage, TeamDetailPage, StandingsPage, GamePage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    TeamDetailPage,
    StandingsPage,
    GamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAyoJ0bc88PtBjXD3LjWlEjPH2JsjBOabM'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    TeamDetailPage,
    StandingsPage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
