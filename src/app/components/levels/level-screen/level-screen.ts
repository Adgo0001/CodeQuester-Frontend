import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Level } from '../../../models/level.model';
import { LevelService } from '../../../services/level.service';
import { LanguageSelector } from '../language-selector/language-selector';
import { LevelMap } from '../level-map/level-map';

@Component({
  selector: 'app-level-screen',
  imports: [RouterLink, LanguageSelector, LevelMap],
  templateUrl: './level-screen.html',
  styleUrl: './level-screen.scss',
})
export class LevelScreen {
  languages: string[] = [];
  chosenLanguage = '';
  levels = signal<Level[]>([]);

  constructor(private levelService: LevelService) {
    this.languages = this.levelService.getLanguages();
    this.chosenLanguage = this.languages[0];
    this.loadLevels();
  }

  switchLanguage(language: string): void {
    this.chosenLanguage = language;
    this.loadLevels();
  }

  resetLevels(): void {
    this.levelService
      .resetLevels(this.chosenLanguage)
      .subscribe(() => {
        this.loadLevels();
      });
  }

  private loadLevels(): void {
    this.levelService
      .getLevelsByLanguage(this.chosenLanguage)
      .subscribe({
        next: levels => {
          this.levels.set(levels);
        },
        error: error => {
          console.log('Levels kunne ikke hentes:', error);
          this.levels.set([]);
        }
      });
  }
}