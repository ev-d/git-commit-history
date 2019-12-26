import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitsPageComponent } from './pages/commits/commits.component';

const routes: Routes = [
  {
    path: '', component: CommitsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitsRoutingModule { }