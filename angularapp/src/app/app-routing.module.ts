import {  Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdmineditinternshipComponent } from './components/admineditinternship/admineditinternship.component';

import { CreateinternshipComponent } from './components/createinternship/createinternship.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';

import { ViewinternshipComponent } from './components/viewinternship/viewinternship.component';
import { UserappliedinternshipComponent } from './components/userappliedinternship/userappliedinternship.component';
import { LoginComponent } from './components/login/login.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UserviewinternshipComponent } from './components/userviewinternship/userviewinternship.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'admineditinternship',component:AdmineditinternshipComponent},
  {path:'viewintership', component:ViewinternshipComponent},
  {path:'createinternship',component:CreateinternshipComponent},
  {path:'adminviewfeedback',component:AdminviewfeedbackComponent},
  {path:'userappliedinternship',component:UserappliedinternshipComponent},
  {path:'usernav',component:UsernavComponent},
  {path:'adminnav',component:AdminnavComponent},
  {path: 'useraddfeedback', component: UseraddfeedbackComponent},
  {path: 'userviewfeedback', component: UserviewfeedbackComponent},
  {path: 'userviewinternship', component: UserviewinternshipComponent},
  {path: 'home', component: HomeComponent},
  {path:'',redirectTo:'userappliedinternship',pathMatch:'full'},

  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
