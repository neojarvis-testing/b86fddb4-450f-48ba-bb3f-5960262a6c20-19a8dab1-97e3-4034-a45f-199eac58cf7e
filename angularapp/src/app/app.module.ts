import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmineditinternshipComponent } from './components/admineditinternship/admineditinternship.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { CreateInternshipComponent } from './components/createinternship/createinternship.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { InternshipformComponent } from './components/internshipform/internshipform.component';
import { InternshippiechartComponent } from './components/internshippiechart/internshippiechart.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RequestedinternshipComponent } from './components/requestedinternship/requestedinternship.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { UserviewinternshipComponent } from './components/userviewinternship/userviewinternship.component';
import { ViewInternshipComponent } from './components/viewinternship/viewinternship.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UserappliedinternshipComponent } from './components/userappliedinternship/userappliedinternship.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdmineditinternshipComponent,
    AdminnavComponent,
    AdminviewfeedbackComponent,
    CreateInternshipComponent,
    ErrorComponent,
    HomeComponent,
    InternshipformComponent,
    InternshippiechartComponent,
    LoginComponent,
    NavbarComponent,
    RegistrationComponent,
    RequestedinternshipComponent,
    UserviewfeedbackComponent,
    UsernavComponent,
    UserviewinternshipComponent,
    ViewInternshipComponent,
    UseraddfeedbackComponent,
    UserappliedinternshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
