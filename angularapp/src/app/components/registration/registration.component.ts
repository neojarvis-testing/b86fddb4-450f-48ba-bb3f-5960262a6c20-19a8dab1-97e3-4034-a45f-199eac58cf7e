import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../authguard/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user:User={
  Email:'',
  Password:'',
  Username:'',
  MobileNumber:'',
  UserRole:'',
  SecretKey:''
}
confirmPassword:string='';

  constructor(private authService:AuthGuard, private router:Router) { }
  register():void
  {

    if(this.user.Password!==this.confirmPassword)
    {
      console.log("Passwords do not match.");
      return;
    }

    if(this.user.UserRole=='admin'&& !this.user.SecretKey)
    {
      console.log("Secret Key is required for the admin.")
    }
    console.log(this.user);
    
    this.authService.register(this.user).subscribe((res) => {
    console.log("Registration successful", res);
    this.router.navigate(['/login']);
     },
    error => {
     console.log("Registration failed", error);
   });
    }
    

   
  }

  ngOnInit(): void {
  }

}
