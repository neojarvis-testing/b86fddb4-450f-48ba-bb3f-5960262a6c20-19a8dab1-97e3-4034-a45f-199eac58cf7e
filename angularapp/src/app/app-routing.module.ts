import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdmineditinternshipComponent } from './components/admineditinternship/admineditinternship.component';

import { CreateinternshipComponent } from './components/createinternship/createinternship.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';

import { ViewinternshipComponent } from './components/viewinternship/viewinternship.component';
import { UserappliedinternshipComponent } from './components/userappliedinternship/userappliedinternship.component';
import { LoginComponent } from './components/login/login.component';
import { UserviewinternshipComponent } from './components/userviewinternship/userviewinternship.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'admineditinternship',component:AdmineditinternshipComponent},
  {path:'viewintership', component:ViewinternshipComponent},
  {path:'createinternship',component:CreateinternshipComponent},
  {path:'adminviewfeedback',component:AdminviewfeedbackComponent},
  {path:'userappliedinternship',component:UserappliedinternshipComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'userviewinternship',component:UserviewinternshipComponent},
  {path:'login',component:LoginComponent},
  {path:'adminnav',component:AdminnavComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
