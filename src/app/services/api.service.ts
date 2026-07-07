import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Level } from '../models/level.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api/levels';

  constructor(private http: HttpClient) {}

  getLanguages(): string[] {
    return ['Java', 'HTML', 'CSS', 'JavaScript'];
    }

  getLevelsByLanguage(language: string): Observable<Level[]> {
    return this.http.get<Level[]>(`${this.apiUrl}/${language}`);
  }

  getLevel(language: string, levelId: number): Observable<Level> {
    return this.http.get<Level>(`${this.apiUrl}/${language}/${levelId}`);
  }

  completeLevel(language: string, levelId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${language}/${levelId}/complete`, {});
  }
}