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
      this.username = this.authService.getUserNameFromToken(token);
      this.role = this.authService.getUserRoleFromToken(token);
    }
  }

  logout():void
  {
    this.authService.logout();
    this.router.navigate([`/login`]);
  }
}
