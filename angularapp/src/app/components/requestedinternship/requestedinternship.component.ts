import { Component, OnInit } from '@angular/core';
import { InternshipService } from 'src/app/services/internship.service';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestedinternship',
  templateUrl: './requestedinternship.component.html',
  styleUrls: ['./requestedinternship.component.css']
})
export class RequestedinternshipComponent implements OnInit {
   requestedInternships: InternshipApplication[] = [];
   searchTerm: string = '';

  constructor(private internshipService: InternshipService, private router:Router) {}

   ngOnInit(): void {
     this.loadRequestedInternships();
   }

   loadRequestedInternships(): void {
    
     this.internshipService.getAllInternshipApplications().subscribe((data: InternshipApplication[]) => {
       this.requestedInternships = data;
       console.log(data);
     });
   }

   search(): void {
     if (this.searchTerm) {
       this.requestedInternships = this.requestedInternships.filter(internship =>
         internship.DegreeProgram.toLowerCase().includes(this.searchTerm.toLowerCase())
       );
     } else {
       this.loadRequestedInternships();
     }
   }

   approveInternship(internshipApllication : InternshipApplication): void {
    internshipApllication.ApplicationStatus = 'Approved';
     this.internshipService.updateApplicationStatus(internshipApllication.InternshipApplicationId, internshipApllication).subscribe(() => {
       this.loadRequestedInternships();
     });
   }

   rejectInternship(internshipApllication : InternshipApplication): void {
    internshipApllication.ApplicationStatus = 'Rejected';
     this.internshipService.updateApplicationStatus(internshipApllication.InternshipApplicationId, internshipApllication).subscribe(() => {
       this.loadRequestedInternships();
     });
   }

   viewResume(url: string): void {
     window.open(url, '_blank');
   }

  viewDegreeProgramChart(): void {
    this.router.navigate(['/intershippiechart'])
  }
}
