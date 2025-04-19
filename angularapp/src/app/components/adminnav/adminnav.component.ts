import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})

export class AdminnavComponent implements OnInit {
   showSubmenu = false;
   username: string | null = null;
   role: string | null = null;

  constructor(private router:Router, private authService: AuthService) {}


  ngOnInit() {
     const token = this.authService.getToken();
     if (token) {
       var token1 = localStorage.getItem("token");
       this.username = this.authService.getUserNameFromToken(token1);
       var user=localStorage.getItem("userId")
       this.role = this.authService.getUserRoleFromToken(user);
     }
  }

   logout():void
   {
     this.authService.logout();
     this.router.navigate([`/login`]);
   }
}