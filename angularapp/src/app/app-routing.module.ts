import { Component, NgModule } from '@angular/core';
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
import { HomeComponent } from './components/home/home.component';
import { RequestedinternshipComponent } from './components/requestedinternship/requestedinternship.component';
import { UserviewinternshipComponent } from './components/userviewinternship/userviewinternship.component';
import { InternshipformComponent } from './components/internshipform/internshipform.component';


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'admineditinternship/:id',component:AdmineditinternshipComponent},
  {path:'viewinternship', component:ViewinternshipComponent},
  {path:'createinternship',component:CreateinternshipComponent},
  {path:'adminviewfeedback',component:AdminviewfeedbackComponent},
  {path:'userappliedinternships',component:UserappliedinternshipComponent},
  {path:'usernav',component:UsernavComponent},
  {path:'adminnav',component:AdminnavComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'userappliedinternship',pathMatch:'full'},
  {path:'createinternship',component:CreateinternshipComponent},
  {path:'requestedinternship',component:RequestedinternshipComponent},
  {path:'login',component:LoginComponent},
  {path:'userviewinternships',component:UserviewinternshipComponent},
  {path:'internshipform', component:InternshipformComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
