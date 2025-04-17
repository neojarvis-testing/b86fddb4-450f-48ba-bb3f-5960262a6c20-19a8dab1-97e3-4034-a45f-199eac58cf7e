import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  role : string | null = null;
  constructor(private authSer:AuthService){
    this.load();
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
 
 