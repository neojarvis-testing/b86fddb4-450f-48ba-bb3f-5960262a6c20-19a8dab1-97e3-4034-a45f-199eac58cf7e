import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-internshipform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.css']
})
export class InternshipformComponent implements OnInit {
 
  application: InternshipApplication = {
    UserId: 0,
    InternshipId: 0,
    UniversityName: '',
    DegreeProgram: '',
    Resume: '',
    ApplicationStatus: 'Pending',
    ApplicationDate: new Date().toISOString()
  };
 
  constructor() {}
  //private router: Router
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.application.Resume = file.name;
    }
  }
 
  onSubmit(): void {
    if (this.application.UniversityName && this.application.DegreeProgram && this.application.Resume) {
      // Handle form submission logic here
      console.log('Form submitted', this.application);
      Swal.fire({
        title: 'Successfully Submitted!',
        text: 'Your application has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          //this.router.navigate(['/userviewinternship']);
        }
      });
    } else {
      Swal.fire({
        title: 'Validation Error',
        text: 'All fields are required.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
 
  goBack(): void {
   // this.router.navigate(['/userviewinternship']);
  }
 
 
  ngOnInit(): void {
  }
 
}
 
 