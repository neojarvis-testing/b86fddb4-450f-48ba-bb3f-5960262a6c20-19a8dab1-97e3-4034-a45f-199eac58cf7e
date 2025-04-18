import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Internship } from 'src/app/models/internship.model';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { InternshipService } from 'src/app/services/internship.service';
 
@Component({
  selector: 'app-userviewinternship',
  templateUrl: './userviewinternship.component.html',
  styleUrls: ['./userviewinternship.component.css']
})
export class UserviewinternshipComponent implements OnInit {
   internships: Internship[];
 
  constructor(private internshipservice:InternshipService, private router:Router) { } 
 
  ngOnInit(): void {
    this.allinternships();
  }
   allinternships(){

     this.internshipservice.getAllInternships().subscribe(
       (data) => {
         this.internships = data;
       },
       (error) => {
         console.error('Error fetching internships', error);
       }
     );
     }

    applyInternship(id:number){

      this.router.navigate([`user/internshipform/${id}`]);

    }
 
}