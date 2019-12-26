import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; 

import { CommitsRoutingModule } from './commits-routing.module';

import { HttpService } from '../../core/services/http.service';

import { CommitsPageComponent } from './pages/commits/commits.component';


@NgModule({
  declarations: [
    CommitsPageComponent,
  ],
  imports:[
    CommonModule,
    CommitsRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  exports:[],
  providers:[
    HttpService,
  ],
})
export class CommitsModule { }