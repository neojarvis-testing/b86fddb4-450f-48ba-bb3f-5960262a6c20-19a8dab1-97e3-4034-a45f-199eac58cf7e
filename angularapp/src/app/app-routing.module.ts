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


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'admineditinternship',component:AdmineditinternshipComponent},
  {path:'viewintership', component:ViewinternshipComponent},
  {path:'createinternship',component:CreateinternshipComponent},
  {path:'adminviewfeedback',component:AdminviewfeedbackComponent},
  {path:'userappliedinternship',component:UserappliedinternshipComponent},
  {path:'usernav',component:UsernavComponent},
  {path:'adminnav',component:AdminnavComponent},
  {path:'',redirectTo:'userappliedinternship',pathMatch:'full'},

  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
