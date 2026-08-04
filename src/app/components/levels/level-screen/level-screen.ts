import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { delay, finalize } from 'rxjs';

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
  loading = signal(false);

  constructor(private levelService: LevelService) {
    this.languages = this.levelService.getLanguages();
    if (this.chosenLanguage) {
      this.loadLevels();
    }
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
    this.loading.set(true);

    this.levelService
      .getLevelsByLanguage(this.chosenLanguage)
      .pipe(
        delay(2000),
        finalize(() => this.loading.set(false))
      )
      .subscribe({
        next: levels => {
          this.levels.set(levels);
          this.loading.set(false);
        },
        error: error => {
          console.log('Levels kunne ikke hentes:', error);
          this.levels.set([]);
          this.loading.set(false);
        }
      });
  }
}