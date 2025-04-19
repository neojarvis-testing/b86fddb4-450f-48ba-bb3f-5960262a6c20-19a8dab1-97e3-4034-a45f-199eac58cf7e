import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  role : string | null = null;
  

  constructor(private authSer:AuthService, private router:Router){
    this.load();
    this.autoLogout();
  }

  autoLogout(): void {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000;
      const now = Date.now();
      const timeout = expiry - now;
  
      if (timeout > 0) {
        setTimeout(() => {
          this.authSer.logout();
          this.router.navigate(['/login'], { queryParams: { message: 'Session expired' } });
        }, timeout);
      }
    } catch (e) {
      console.error('Auto-logout failed:', e);
    }
  }
  checkAuthentication(): void {
    this.isLoggedIn = this.authSer.isLoggedIn(); // Check if user is logged in
    this.role = this.authSer.getUserRole(); // Get user role (Admin or User)
  }
  
  load(){
    this.authSer.isLoggedInApp.subscribe(
      (status) => {
        this.isLoggedIn = status;
        this.authSer.currentUserRole.subscribe(
          (role) => {
            this.role = role;
          }
        )
      }
    );
  }
  title = 'angularapp';

  ngOnInit(){
    this.load();
  }
}
 
 