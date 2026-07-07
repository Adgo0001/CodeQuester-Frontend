import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Level } from '../models/level.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private readonly languageKey = 'codequester-language';

  constructor(private apiService: ApiService) {}

  getLanguages(): string[] {
    return this.apiService.getLanguages();
  }

  getSavedLanguage(): string {
    return localStorage.getItem(this.languageKey) ?? 'Java';
  }

  saveLanguage(language: string): void {
    localStorage.setItem(this.languageKey, language);
  }

  getLevelsByLanguage(language: string): Observable<Level[]> {
    return this.apiService.getLevelsByLanguage(language);
  }

  getLevel(language: string, levelId: number): Observable<Level> {
    return this.apiService.getLevel(language, levelId);
  }

  completeLevel(language: string, levelId: number): Observable<void> {
    this.saveLanguage(language);
    return this.apiService.completeLevel(language, levelId);
  }
}