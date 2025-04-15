import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateInternshipComponent } from './components/createinternship/createinternship.component';
import { AdmineditinternshipComponent } from './components/admineditinternship/admineditinternship.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';

const routes: Routes = [
{path:'createinternship',component:CreateInternshipComponent},
 {path:'registration',component:RegistrationComponent},
{path:'admineditinternship',component:AdmineditinternshipComponent},
{path:'login', component:LoginComponent},
{path:'',redirectTo:'home',pathMatch:"full"},
{path:'error',component:ErrorComponent},
{path:'home',component:HomeComponent},
{path:'adminineditinternship',component:AdmineditinternshipComponent},
{path:'adminviewfeedback',component:AdminviewfeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
