import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
{
  path: '',
  component: MainLoginComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', redirectTo: '' },
  ]
}
 

    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
