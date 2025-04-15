import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmineditinternshipComponent } from './components/admineditinternship/admineditinternship.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { CreateinternshipComponent } from './components/createinternship/createinternship.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { InternshipformComponent } from './components/internshipform/internshipform.component';
import { InternshippiechartComponent } from './components/internshippiechart/internshippiechart.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RequestedinternshipComponent } from './components/requestedinternship/requestedinternship.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { UserviewinternshipComponent } from './components/userviewinternship/userviewinternship.component';
import { ViewinternshipComponent } from './components/viewinternship/viewinternship.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UserappliedinternshipComponent } from './components/userappliedinternship/userappliedinternship.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    AdminnavComponent,
    ViewInternshipComponent
=======
    AdmineditinternshipComponent,
    AdminnavComponent,
    AdminviewfeedbackComponent,
    CreateinternshipComponent,
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
    ViewinternshipComponent,
    UseraddfeedbackComponent,
    UserappliedinternshipComponent
>>>>>>> 079e1c67721442801fb083cacdfb28d696ecefa5
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    
    
=======
    HttpClientModule
>>>>>>> 079e1c67721442801fb083cacdfb28d696ecefa5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
