import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InternshipService } from 'src/app/services/internship.service';

@Component({
  selector: 'app-internshipform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.css']
})
export class InternshipformComponent implements OnInit {
   intershipId : number ;
   userId = Number(localStorage.getItem('userId')); 
   application: InternshipApplication = {
     UserId: 0,
     InternshipId: 0,
     UniversityName: '',
     DegreeProgram: '',
     Resume: '',
     ApplicationStatus: 'Pending',
     ApplicationDate: new Date()
   };
 
   constructor(private route:ActivatedRoute, private ser:InternshipService, private router: Router) {
     route.params.subscribe(
       (params) => {
         this.intershipId =+ params[`id`];
       }
     )
   }
   onFileChange(event: any): void {
     const file = event.target.files[0];
     if (file) {
       this.application.Resume = file.name;
     }
   }
 
   onSubmit(): void {
     if (this.application.UniversityName && this.application.DegreeProgram && this.application.Resume) {
        //Handle form submission logic here
       console.log('Form submitted', this.application);
       this.application.UserId = this.userId;
       this.application.InternshipId = this.intershipId;
       this.ser.addInternshipApplication(this.application).subscribe(
         (data) => {
           Swal.fire({
             title: 'Successfully Submitted!',
             text: 'Your application has been submitted successfully.',
             icon: 'success',
             confirmButtonText: 'OK'
           }).then((result) => {
             if (result.isConfirmed) {
               this.router.navigate(['/userappliedinternships']);
             }
           });
         },
         (error) => {
           console.error('Error fetching internships', error);
         }
       );
      

      
     }
   }
 
   goBack(): void {
    this.router.navigate(['/userviewinternship']);
   }
 
 
  ngOnInit(): void {
  }
 
}
 
 