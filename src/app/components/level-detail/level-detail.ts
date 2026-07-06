import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Level, Task } from '../../models/level.model';
import { LevelService } from '../../services/level.service';
import { ResultModal } from '../result-modal/result-modal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-level-detail',
  imports: [RouterLink, ResultModal, FormsModule],
  templateUrl: './level-detail.html',
  styleUrl: './level-detail.scss',
})
export class LevelDetail {
  level?: Level;
  answer = '';
  showResult = false;
  showHint = false;
  errorText = '';

  constructor(
    private route: ActivatedRoute,
    private levelService: LevelService
  ) {
    this.loadLevel();
  }

  get task(): Task | undefined {
    return this.level?.tasks[0];
  }

  getCode(): string {
    if (!this.task) {
      return '';
    }

    return this.task.code.replace('[INPUT_FELT]', this.answer || '[INPUT_FELT]');
  }

  completeLevel(): void {
    if (!this.level || !this.task) {
      return;
    }

    const userAnswer = this.answer.trim();

    if (!userAnswer) {
      this.errorText = 'Skriv et svar først.';
      return;
    }

    if (userAnswer !== this.task.correctAnswer) {
      this.errorText = 'Svaret er ikke korrekt. Prøv igen.';
      return;
    }

    this.levelService.completeLevel(this.level.language, this.level.id);
    this.showResult = true;
  }

  private loadLevel(): void {
    const language = this.route.snapshot.paramMap.get('language') ?? 'Java';
    const levelId = Number(this.route.snapshot.paramMap.get('id'));

    this.level = this.levelService.getLevel(language, levelId);
  }
}