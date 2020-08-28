import FallGuyPlayerGroupBuilder from "./fall-guy-player-group-builder";
import FallGuyPlayerGroup from "../models/fall-guy-player-group";

describe('FallGuyPlayerGroupBuilder', () => {
  it('creates teams', () => {
    const playerCount = 36;
    let fallGuyPlayerGroups: FallGuyPlayerGroup[] = FallGuyPlayerGroupBuilder.CreatePlayerGame(playerCount);
    let sum = 0;
    for (const playerGroup of fallGuyPlayerGroups) {
      sum += playerGroup.players.length;
    }

    expect(playerCount).toBe(36);
  });
});