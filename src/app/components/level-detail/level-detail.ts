import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Level } from '../../models/level.model';
import { LevelService } from '../../services/level.service';
import { ResultModal } from '../result-modal/result-modal';

@Component({
  selector: 'app-level-detail',
  imports: [RouterLink, FormsModule, ResultModal],
  templateUrl: './level-detail.html',
  styleUrl: './level-detail.scss',
})
export class LevelDetail {
  level?: Level;
  answer = '';
  errorText = '';
  showHint = false;
  showResult = false;

  constructor(
    private route: ActivatedRoute,
    private levelService: LevelService
  ) {
    this.loadLevel();
  }

  getCode(): string {
    return this.level?.task.code.replace('[INPUT_FELT]', this.answer || '[INPUT_FELT]') ?? '';
  }

  chooseAnswer(answer: string): void {
    this.answer = answer;
    this.errorText = '';
  }

  checkAnswer(): void {
    if (!this.level) {
      return;
    }

    const userAnswer = this.answer.trim();

    if (!userAnswer) {
      this.errorText = 'Skriv eller vælg et svar først.';
      return;
    }

    if (userAnswer !== this.level.task.correctAnswer) {
      this.errorText = 'Svaret er ikke korrekt. Prøv igen.';
      return;
    }

    this.levelService.completeLevel(this.level.language, this.level.id);
    this.showResult = true;
  }

  private loadLevel(): void {
    const language = this.route.snapshot.paramMap.get('language') ?? this.levelService.getSavedLanguage();
    const levelId = Number(this.route.snapshot.paramMap.get('id'));

    this.level = this.levelService.getLevel(language, levelId);
  }
}