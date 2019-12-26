import { NgModule } from '@angular/core';

import { CommitsRoutingModule } from './commits-routing.module';

import { CommitsPageComponent } from './pages/commits/commits.component';


@NgModule({
  declarations: [
    CommitsPageComponent,
  ],
  imports:[
    CommitsRoutingModule
  ],
  exports:[],
  providers:[],
})
export class CommitsModule { }