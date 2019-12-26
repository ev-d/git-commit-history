import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'commits', pathMatch: 'prefix'
  },
  {
    path: 'commits', loadChildren: () => import('./feature/commits/commits.module').then(module => module.CommitsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
