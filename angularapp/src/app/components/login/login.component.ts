import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup; //Define FormGroup
  passwordFieldType: string = 'password'; //Default password type

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ) {}

   ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      Swal.fire({
        title: 'Warning!',
        text: 'Both fields are required.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        var token = localStorage.getItem("token");
        var role = this.authService.getUserRoleFromToken(token);

        
        if (role) {
          if (role.toLowerCase() === 'admin') {
            this.router.navigate(['admin/adminnav']);
          } else if (role.toLowerCase() === 'user') {
            this.router.navigate(['user/usernav']);
          }
          Swal.fire({
            title: 'Success!',
            text: `Successfully logged in as ${role}`,
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          this.router.navigate(['/error']);
        }
      },
      error: () => {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid credentials. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}