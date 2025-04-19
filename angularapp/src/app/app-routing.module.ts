import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { RegistrationComponent } from './components/registration/registration.component';
 import { LoginComponent } from './components/login/login.component';
 import { HomeComponent } from './components/home/home.component';
 import { ErrorComponent } from './components/error/error.component';

 import { AuthGuard } from './components/authguard/auth.guard'; 

  //Admin components
 import { AdmineditinternshipComponent } from './components/admineditinternship/admineditinternship.component';
 import { CreateinternshipComponent } from './components/createinternship/createinternship.component';
 import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
 import { AdminnavComponent } from './components/adminnav/adminnav.component';

  //User components
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

  //Admin routes
  { path: 'admineditinternship/:id', component: AdmineditinternshipComponent},
  { path: 'createinternship', component: CreateinternshipComponent},
  { path: 'viewfeedback', component: AdminviewfeedbackComponent},
  { path: 'adminnav', component: AdminnavComponent },
  { path: 'viewinternship', component: ViewinternshipComponent },
  {path : 'requestedinternship', component:RequestedinternshipComponent},
  {path:'intershippiechart', component:InternshippiechartComponent},
  {path:'adminviewfeedback',component:AdminviewfeedbackComponent},

  // User routes
  { path: 'userappliedinternships', component: UserappliedinternshipComponent},
  { path: 'usernav', component: UsernavComponent},
  { path: 'requestedinternship', component: RequestedinternshipComponent},
  { path: 'userviewinternships', component: UserviewinternshipComponent},
  { path: 'internshipform/:id', component: InternshipformComponent},
  { path: 'useraddfeedback', component: UseraddfeedbackComponent},
  { path: 'userviewfeedback', component: UserviewfeedbackComponent},
  {path:'home',component:HomeComponent},

  { path: 'error', component: ErrorComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
