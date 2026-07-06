import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Level } from '../../models/level.model';
import { LevelService } from '../../services/level.service';
import { ResultModal } from '../result-modal/result-modal';

@Component({
  selector: 'app-level-detail',
  imports: [RouterLink, ResultModal],
  templateUrl: './level-detail.html',
  styleUrl: './level-detail.scss',
})
export class LevelDetail {
  level?: Level;
  showResult = false;

  constructor(
    private route: ActivatedRoute,
    private levelService: LevelService
  ) {
    this.loadLevel();
  }

  completeLevel(): void {
    if (!this.level) {
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