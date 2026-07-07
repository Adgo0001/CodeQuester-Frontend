import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Level, Task } from '../../models/level.model';
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
    private levelService: LevelService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.loadLevel();
  }

  get task(): Task | undefined {
    return this.level?.tasks[0];
  }

  getCode(): string {
    return this.task?.code.replace('[INPUT_FELT]', this.answer || '[INPUT_FELT]') ?? '';
  }

  chooseAnswer(answer: string): void {
    this.answer = answer;
    this.errorText = '';
  }

  checkAnswer(): void {
    if (!this.level || !this.task) {
      return;
    }

    const userAnswer = this.answer.trim();

    if (!userAnswer) {
      this.errorText = 'Skriv eller vælg et svar først.';
      return;
    }

    if (userAnswer !== this.task.correctAnswer) {
      this.errorText = 'Svaret er ikke korrekt. Prøv igen.';
      return;
    }

    this.levelService.completeLevel(this.level.language, this.level.id)
      .subscribe(() => {
        this.showResult = true;
      });
  }

  private loadLevel(): void {
    const language = this.route.snapshot.paramMap.get('language') ?? this.levelService.getSavedLanguage();
    const levelId = Number(this.route.snapshot.paramMap.get('id'));

    console.log('Detail language:', language);
    console.log('Detail levelId:', levelId);

    this.levelService.getLevel(language, levelId)
      .subscribe({
        next: level => {
          console.log('Level detail fra backend:', level);
          this.level = level;
          this.changeDetector.detectChanges();
        },
        error: error => {
          console.log('Fejl ved hentning af level detail:', error);
        }
      });
  }
}