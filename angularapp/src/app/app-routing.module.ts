import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { ViewInternshipComponent } from './components/viewinternship/viewinternship.component';
import { RequestedInternshipComponent } from './components/requestedinternship/requestedinternship.component';


const routes: Routes = [
  {path: 'adminnav', component: AdminnavComponent},
  {path: 'viewinternship', component: ViewInternshipComponent},
  {path: 'requestedinternship', component: RequestedInternshipComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
