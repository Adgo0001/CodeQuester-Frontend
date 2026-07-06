import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Level } from '../../models/level.model';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-level-map',
  imports: [RouterLink],
  templateUrl: './level-map.html',
  styleUrl: './level-map.scss',
})
export class LevelMap {
  chosenLanguage = '';
  languages: string[] = [];
  levels: Level[] = [];

  constructor(private levelService: LevelService) {
    this.chosenLanguage = this.levelService.getSavedLanguage();
    this.languages = this.levelService.getLanguages();
    this.loadLevels();
  }

  switchLanguage(event: Event): void {
    const select = event.target as HTMLSelectElement;

    this.chosenLanguage = select.value;
    this.levelService.saveLanguage(this.chosenLanguage);
    this.loadLevels();
  }

  getLanguageLogo(): string {
    return `/Icons/${this.chosenLanguage}-Icon.png`;
  }

  getStatusIcon(level: Level): string {
    if (level.completed) {
      return '/Icons/Checked-logo.png';
    }

    if (level.unlocked) {
      return '/Icons/Open-Padlock.png';
    }

    return '/Icons/Locked-Padlock.png';
  }

  getStatusText(level: Level): string {
    if (level.completed) {
      return 'Completed';
    }

    if (level.unlocked) {
      return 'Unlocked';
    }

    return 'Locked';
  }

  getTopLevels(): Level[] {
    return this.levels.slice(0, 4);
  }

  getBottomLevels(): Level[] {
    return this.levels.slice(4).reverse();
  }

  private loadLevels(): void {
    this.levels = this.levelService.getLevelsByLanguage(this.chosenLanguage);
  }
}