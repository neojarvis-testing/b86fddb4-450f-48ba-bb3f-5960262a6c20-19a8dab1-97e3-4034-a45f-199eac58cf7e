import { Component, OnInit } from '@angular/core';
import { Internship } from 'src/app/models/internship.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InternshipService } from 'src/app/services/internship.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-createinternship',
  templateUrl: './createinternship.component.html',
  styleUrls: ['./createinternship.component.css']
})
export class CreateinternshipComponent implements OnInit {
internship:Internship=
  {
    Title:'',
    CompanyName:'',
    Location:'',
    DurationInMonths:0,
    Stipend:0,
    Description:'',
    SkillsRequired:'',
    ApplicationDeadline:''
  };
  formSubmitted:boolean=false;
  internshipId:number;
  errorMessage:string;
 
showModal: boolean = false;
 successMessage: string = '';
 showModel:boolean=false;
 
 
  constructor(private route:ActivatedRoute,private internshipService:InternshipService,private router:Router) { }
 
  ngOnInit(): void {
   
    this.route.params.subscribe(params => {
      this.internshipId = params['id'];
      this.internshipService.getInternshipById(this.internshipId).subscribe(res => {
     this.internship = res;
     }, error => {
     this.errorMessage = "Failed to load internship details.";
     this.showModal=true;
      });
      });
 
  }
 
  editAdminInternship():void
  {
    this.formSubmitted=true;
    if(this.internship.Title &&this.internship.CompanyName && this.internship.Location && this.internship.DurationInMonths && this.internship.Stipend && this.internship.Description && this.internship.SkillsRequired && this.internship.ApplicationDeadline)
    {
      this.internshipService.updateInternship(this.internshipId,this.internship).subscribe(()=>
      {
        Swal.fire({
          title:'Updated successfully',
          confirmButtonText:'Ok'
        }).then((res)=>
        {
          console.log(res);
          if(res.isConfirmed)
          {
            window.location.href='/viewinternship';
          }
 
        });
      });
 
    }
  }
 
 
   handleError(error: any): void {
     if (error.status === 500) {
     this.errorMessage = "An internship with the same title already exists.";
     } else {
    this.errorMessage = "An unexpected error occurred. Please try again.";
    }
    Swal.fire({
     title: 'Error',
     text: this.errorMessage,
     icon: 'error',
    confirmButtonText: 'Ok'
   });
     }
   
  backbutton():void{
    this.router.navigate(['/viewinternship']);
  }
 
closeModal(): void {
 this.showModal = false;
  }
 
 
}
