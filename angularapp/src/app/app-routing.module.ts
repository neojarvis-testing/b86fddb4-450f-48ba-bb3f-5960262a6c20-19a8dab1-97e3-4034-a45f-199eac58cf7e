import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdmineditinternshipComponent } from './components/admineditinternship/admineditinternship.component';

import { CreateinternshipComponent } from './components/createinternship/createinternship.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { ViewinternshipComponent } from './components/viewinternship/viewinternship.component';
import { InternshipformComponent } from './components/internshipform/internshipform.component';

const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'admineditinternship',component:AdmineditinternshipComponent},
  {path:'viewintership', component:ViewinternshipComponent},
  {path:'createinternship',component:CreateinternshipComponent},
  {path:'adminviewfeedback',component:AdminviewfeedbackComponent},
  {path:'internshipform', component:InternshipformComponent},
  {path:'',redirectTo:'registration',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
