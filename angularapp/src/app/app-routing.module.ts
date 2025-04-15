import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdmineditinternshipComponent } from './components/admineditinternship/admineditinternship.component';

const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'admineditinternship',component:AdmineditinternshipComponent},
  {path:'',redirectTo:'admineditinternship',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
