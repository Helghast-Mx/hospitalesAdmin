import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guard/auth.guard';
import { MainComponent } from './main/main.component';
import { DetailsPatientsComponent } from './details-patients/details-patients.component';
import { PatientsComponent } from './patients/patients.component';
import { ProfileComponent } from './profile/profile.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [ AuthGuard ],
    children : [
      { path: 'profile', component: ProfileComponent },
      { path: 'pacientes', component: PatientsComponent },
      { path: ':id', component: DetailsPatientsComponent },
      { path: 'citas', component: QuotesComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
