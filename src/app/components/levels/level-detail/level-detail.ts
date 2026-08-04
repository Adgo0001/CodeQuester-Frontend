import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Level } from '../../../models/level.model';
import { LevelService } from '../../../services/level.service';
import { ResultModal } from '../../result-modal/result-modal';

@Component({
  selector: 'app-level-detail',
  imports: [RouterLink, FormsModule, ResultModal],
  templateUrl: './level-detail.html',
  styleUrl: './level-detail.scss',
})
export class LevelDetail {
  level = signal<Level | undefined>(undefined);

  answer = '';
  errorText = '';
  showHint = false;
  showResult = signal(false);

  constructor(
    private route: ActivatedRoute,
    private levelService: LevelService
  ) {
    this.loadLevel();
  }

  get task() {
    return this.level()?.tasks[0];
  }

  getCode(): string {
    return this.task?.code.replace(
      '[INPUT_FELT]',
      this.answer || '[INPUT_FELT]'
    ) ?? '';
  }

  getLanguageLogo(): string {
    const language = this.level()?.language;

    return language
      ? `/Icons/${language}-Icon.png`
      : '';
  }

  checkAnswer(): void {
    const level = this.level();
    const task = this.task;
    const answer = this.answer.trim();

    if (!level || !task) {
      return;
    }

    if (!answer) {
      this.errorText = 'Skriv et svar først.';
      return;
    }

    if (answer !== task.correctAnswer) {
      this.errorText = 'Svaret er ikke korrekt. Prøv igen.';
      return;
    }

    this.errorText = '';

    this.levelService
      .completeLevel(level.language, level.id)
      .subscribe(() => {
        this.showResult.set(true);
      });
  }

  private loadLevel(): void {
    const language = this.route.snapshot.paramMap.get('language');
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!language) {
      return;
    }

    this.levelService
      .getLevel(language, id)
      .subscribe({
        next: level => this.level.set(level),
        error: error => console.log('Level kunne ikke hentes:', error)
      });
  }
}