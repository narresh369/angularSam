import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ShowappComponent } from './showapp/showapp.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const appRoutes: Routes = [  
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'showapp', component: ShowappComponent },
  { path: 'errorpage', component: ErrorpageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
