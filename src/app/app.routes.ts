import { Routes } from '@angular/router';

import { HomeScreen } from './components/home-screen/home-screen';
import { InfoScreen } from './components/info-screen/info-screen';
import { LevelDetail } from './components/level-detail/level-detail';
import { LevelMap } from './components/level-map/level-map';

export const routes: Routes = [
  { path: '', component: HomeScreen },
  { path: 'levels', component: LevelMap },
  { path: 'levels/:language/:id', component: LevelDetail },
  { path: 'info', component: InfoScreen },
  { path: '**', redirectTo: '' }
];