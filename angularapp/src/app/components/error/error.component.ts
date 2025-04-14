import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage:string="Something Went Wrong";
  errorInformation:string="We're sorry, but an error occurred.Please try again later.";

  constructor(/*private router:Router*/) { }

  ngOnInit(): void {
  }
  
  // goBack(): void {
  //   this.router.navigate(['/login']);
  //    }
    

}
