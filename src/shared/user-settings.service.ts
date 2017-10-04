import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';

@Injectable()
export class UserSettings {

    constructor(
        public storage: Storage,
        private events: Events
    ){

    }

    favoriteTeam(team, tournamentId, tournamentName) {
        let item = {
            team: team,
            tournamentId: tournamentId,
            tournamentName: tournamentName
        };
        return new Promise(resolve => {
            this.storage.set(team.id.toString(), JSON.stringify(item)).then(() => {
                this.events.publish("favorites:changed");
                resolve();
            });
        });
    }

    unfavoriteTeam(team) {
        return new Promise(resolve => {
            this.storage.remove(team.id.toString()).then(() => {
                this.events.publish("favorites:changed");
                resolve();
            });
        });
    }

    isFavoriteTeam(teamId) : Promise<boolean> {
        return new Promise(resolve => resolve(this.storage.get(teamId.toString()).then(value => value ? true : false)));
    }

    getAllFavorites() : Promise<any[]> {
        return new Promise(resolve => {
            let results = [];
            this.storage.forEach(data => {
                results.push(JSON.parse(data));
            });
            return resolve(results);
        });        
    }

}