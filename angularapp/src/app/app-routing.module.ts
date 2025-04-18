import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

import { AuthGuard } from './components/authguard/auth.guard'; 

// Admin components
import { AdmineditinternshipComponent } from './components/admineditinternship/admineditinternship.component';
import { CreateinternshipComponent } from './components/createinternship/createinternship.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';

// User components
import { ViewinternshipComponent } from './components/viewinternship/viewinternship.component';
import { UserappliedinternshipComponent } from './components/userappliedinternship/userappliedinternship.component';
import { UsernavComponent } from './components/usernav/usernav.component';

import { RequestedinternshipComponent } from './components/requestedinternship/requestedinternship.component';
import { UserviewinternshipComponent } from './components/userviewinternship/userviewinternship.component';
import { InternshipformComponent } from './components/internshipform/internshipform.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { InternshippiechartComponent } from './components/internshippiechart/internshippiechart.component';


const routes: Routes = [

  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  //Admin routes
  { path: 'admin/editinternship/:id', component: AdmineditinternshipComponent, canActivate: [AuthGuard] },
  { path: 'admin/createinternship', component: CreateinternshipComponent, canActivate: [AuthGuard] },
  { path: 'admin/viewfeedback', component: AdminviewfeedbackComponent, canActivate: [AuthGuard] },
  { path: 'admin/nav', component: AdminnavComponent, canActivate: [AuthGuard] },
  { path: 'admin/viewinternship', component: ViewinternshipComponent, canActivate: [AuthGuard] },
  {path : 'admin/requestedinternship', component:RequestedinternshipComponent},
  {path:'admin/intershippiechart', component:InternshippiechartComponent},

  // User routes
  { path: 'user/userappliedinternships', component: UserappliedinternshipComponent, canActivate: [AuthGuard] },
  { path: 'user/nav', component: UsernavComponent, canActivate: [AuthGuard] },
  { path: 'user/requestedinternship', component: RequestedinternshipComponent, canActivate: [AuthGuard] },
  { path: 'user/userviewinternships', component: UserviewinternshipComponent, canActivate: [AuthGuard] },
  { path: 'user/internshipform/:id', component: InternshipformComponent, canActivate: [AuthGuard] },
  { path: 'user/post-feedback', component: UseraddfeedbackComponent, canActivate: [AuthGuard] },
  { path: 'user/my-feedback', component: UserviewfeedbackComponent, canActivate: [AuthGuard] },
  {path:'home',component:HomeComponent},

  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
