import FallGuyPlayerGroup from "../models/fall-guy-player-group";

export default class FallGuyPlayerGroupBuilder {
    private static playerNumber = 1000;

    public static CreatePlayerGame(totalPlayers: number): FallGuyPlayerGroup[] {
        let allPlayers: FallGuyPlayerGroup[] = [];
        while (totalPlayers > 0) {
            let random = Math.floor(Math.random() * 100) + 1;
            let playerGroup: FallGuyPlayerGroup = null;
            if (random >= 95 && totalPlayers >= 4) {
                playerGroup = this.CreatePlayerGroup(4);
            } else if (random > 85 && totalPlayers >= 3) {
                playerGroup = this.CreatePlayerGroup(3);
            } else if (random > 65 && totalPlayers >= 2) {
                playerGroup = this.CreatePlayerGroup(2);
            } else {
                playerGroup = this.CreatePlayerGroup(1);
            }
            totalPlayers = totalPlayers - playerGroup.players.length;
            allPlayers.push(playerGroup);
        }

        return allPlayers;
    }
    
    private static CreatePlayerGroup(numberOfPlayersOnTeam: number): FallGuyPlayerGroup {
        let players: string[] = [];
        for (let i = 0; i < numberOfPlayersOnTeam; i++) {
            players.push('Player' + this.playerNumber++);            
        }

        return new FallGuyPlayerGroup(players);
    }
}