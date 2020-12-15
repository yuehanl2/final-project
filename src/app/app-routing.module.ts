import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
    pathMatch: 'full'

  },

  {
    path:'login',
    component:LoginComponent

  },

  {
    path:'signUp',
    component:SignUpComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
},
)
export class AppRoutingModule { }
