import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string = '';
  email: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.logout();
  }

  
 login(form: NgForm): void {
    const loginUser: Login = {
      Email: this.email,
      Password: this.password,
      
    };
    
    if (loginUser.Email && loginUser.Password) {
      this.authService.login(loginUser).subscribe({
        next: user => {
          if (this.authService.isAdmin()) {
            this.router.navigate(['/admin']);
          } else if (this.authService.isOrganizer()) {
            this.router.navigate(['/organizer']);
          }
        },
        error: err => console.error('Login failed', err)
      });
    } else {
      alert("Incorrect username or password");
    }
  }
}
