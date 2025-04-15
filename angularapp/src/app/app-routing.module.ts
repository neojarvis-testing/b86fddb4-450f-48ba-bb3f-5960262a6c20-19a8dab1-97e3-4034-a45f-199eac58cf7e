import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { ViewInternshipComponent } from './components/viewinternship/viewinternship.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'adminnav', component: AdminnavComponent},
  {path: 'viewinternship', component: ViewInternshipComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
