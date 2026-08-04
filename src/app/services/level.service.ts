import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Level } from '../models/level.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor(private apiService: ApiService) {}

  getLanguages(): string[] {
    return this.apiService.getLanguages();
  }

  getLevelsByLanguage(language: string): Observable<Level[]> {
    return this.apiService.getLevelsByLanguage(language);
  }

  getLevel(language: string, levelId: number): Observable<Level> {
    return this.apiService.getLevel(language, levelId);
  }

  completeLevel(language: string, levelId: number): Observable<void> {
    return this.apiService.completeLevel(language, levelId);
  }

  resetLevels(language: string): Observable<void> {
    return this.apiService.resetLevels(language);
  }
}