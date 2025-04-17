import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  isLoggedIn : boolean = localStorage.getItem('token') == null ? false : true;
  isAdmin : boolean = localStorage.getItem('userRole') && localStorage.getItem('userRole') == 'Admin'? true : false; 
}
