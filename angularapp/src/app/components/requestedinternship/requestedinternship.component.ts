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
  userId: number = 1; // Replace with the actual user ID

  constructor(private internshipService: InternshipService, private router:Router) {}

  ngOnInit(): void {
    this.loadRequestedInternships();
  }

  loadRequestedInternships(): void {
    this.internshipService.getAppliedInternships(this.userId).subscribe((data: InternshipApplication[]) => {
      this.requestedInternships = data;
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

  approveInternship(id: number): void {
    this.internshipService.updateApplicationStatus(id, { status: 'approved' } as unknown as InternshipApplication).subscribe(() => {
      this.loadRequestedInternships();
    });
  }

  rejectInternship(id: number): void {
    this.internshipService.updateApplicationStatus(id, { status: 'rejected' } as unknown as InternshipApplication).subscribe(() => {
      this.loadRequestedInternships();
    });
  }

  viewResume(url: string): void {
    window.open(url, '_blank');
  }

  viewDegreeProgramChart(): void {
    this.router.navigate(['/admin/internshippiechart'])
  }
}
