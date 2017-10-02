import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserSettings {

    constructor(
        public storage: Storage
    ){

    }

    favoriteTeam(team, tournamentId, tournamentName) {
        let item = {
            team: team,
            tournamentId: tournamentId,
            tournamentName: tournamentName
        };

        this.storage.set(team.id.toString(), JSON.stringify(item));
            // .then(data => {
            //     this.ev
            // });
    }

    unfavoriteTeam(team) {
        this.storage.remove(team.id.toString());
    }
}