import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Level } from '../../../models/level.model';

@Component({
  selector: 'app-level-map',
  imports: [RouterLink],
  templateUrl: './level-map.html',
  styleUrl: './level-map.scss',
})
export class LevelMap {
  @Input() levels: Level[] = [];

  levelNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  findLevel(levelNumber: number): Level | undefined {
    return this.levels.find(level => level.id === levelNumber);
  }

  getStatusIcon(level: Level): string {
    if (level.completed) {
      return '/Icons/Checked-logo.png';
    }

    return '/Icons/Locked-Padlock.png';
  }

  getStatusText(level: Level): string {
    return level.completed ? 'Gennemført' : 'Låst';
  }
}