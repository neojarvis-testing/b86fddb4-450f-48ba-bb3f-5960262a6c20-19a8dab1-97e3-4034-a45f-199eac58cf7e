import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { ViewInternshipComponent } from './components/viewinternship/viewinternship.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminnavComponent,
    ViewInternshipComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
