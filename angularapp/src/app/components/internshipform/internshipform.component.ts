import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { InternshipService } from 'src/app/services/internship.service';

@Component({
  selector: 'app-internshipform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.css']
})
export class InternshipformComponent implements OnInit {

  successMessage = '';

  constructor(private internshipService: InternshipService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const application: InternshipApplication = {
      UserId: form.value.userId,
      InternshipId: form.value.internshipId,
      UniversityName: form.value.universityName,
      DegreeProgram: form.value.degreeProgram,
      Resume: form.value.resume,
      LinkedInProfile: form.value.linkedInProfile,
      ApplicationStatus: form.value.applicationStatus,
      ApplicationDate: form.value.applicationDate
    };

    this.internshipService.addInternshipApplication(application).subscribe(
      response => {
        this.successMessage = 'Successfully Submitted!';
        setTimeout(() => {
          // Redirect to userviewinternship component
        }, 2000);
      },
      error => {
        console.error('Error submitting application', error);
      }
    );
  }
}
