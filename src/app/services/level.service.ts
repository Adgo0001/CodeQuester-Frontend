import { Injectable } from '@angular/core';

import { LEVELS } from '../data/level.data';
import { Level } from '../models/level.model';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private readonly progressKey = 'codequester-progress';
  private readonly languageKey = 'codequester-language';

  getLanguages(): string[] {
    return [...new Set(LEVELS.map(level => level.language))];
  }

  getSavedLanguage(): string {
    return localStorage.getItem(this.languageKey) ?? 'Java';
  }

  saveLanguage(language: string): void {
    localStorage.setItem(this.languageKey, language);
  }

  getLevelsByLanguage(language: string): Level[] {
    const completedLevel = this.getCompletedLevel(language);

    return LEVELS
      .filter(level => level.language === language)
      .map(level => ({
        ...level,
        completed: level.id <= completedLevel,
        unlocked: level.id <= completedLevel + 1
      }));
  }

  getLevel(language: string, levelId: number): Level | undefined {
    return this.getLevelsByLanguage(language)
      .find(level => level.id === levelId);
  }

  completeLevel(language: string, levelId: number): void {
    const progress = this.getProgress();
    const currentLevel = progress[language] ?? 0;

    this.saveLanguage(language);

    if (levelId > currentLevel) {
      progress[language] = levelId;
      this.saveProgress(progress);
    }
  }

  private getCompletedLevel(language: string): number {
    return this.getProgress()[language] ?? 0;
  }

  private getProgress(): Record<string, number> {
    const savedProgress = localStorage.getItem(this.progressKey);

    if (!savedProgress) {
      return {};
    }

    try {
      return JSON.parse(savedProgress);
    } catch {
      return {};
    }
  }

  private saveProgress(progress: Record<string, number>): void {
    localStorage.setItem(this.progressKey, JSON.stringify(progress));
  }
}