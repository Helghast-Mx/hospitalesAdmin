import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PatientsComponent } from './patients/patients.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsPatientsComponent } from './details-patients/details-patients.component';

import { MainComponent } from './main/main.component';

import { NzStepsModule } from 'ng-zorro-antd/steps';

@NgModule({
  declarations: [
    MainComponent,
    QuotesComponent,
    ProfileComponent,
    PatientsComponent,
    DetailsPatientsComponent,
    MainComponent,    
],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    NzStepsModule
],
  imports: [
    RouterModule,
    CommonModule,
    PagesRoutingModule,
    MatTableModule,
    SharedModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    NzStepsModule
  ],
})
export class PagesModule { }
