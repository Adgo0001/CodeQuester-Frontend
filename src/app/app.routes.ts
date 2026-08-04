import { Routes } from '@angular/router';

import { HomeScreen } from './components/home-screen/home-screen';
import { InfoScreen } from './components/info-screen/info-screen';
import { LevelScreen } from './components/levels/level-screen/level-screen';
import { LevelDetail } from './components/levels/level-detail/level-detail';

export const routes: Routes = [
  { path: '', component: HomeScreen },
  { path: 'levels', component: LevelScreen },
  { path: 'levels/:language/:id', component: LevelDetail },
  { path: 'info', component: InfoScreen },
  { path: '**', redirectTo: '' }
];