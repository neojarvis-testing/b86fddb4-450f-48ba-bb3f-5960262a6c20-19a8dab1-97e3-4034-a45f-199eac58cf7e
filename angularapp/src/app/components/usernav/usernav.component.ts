import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
import { Internship } from 'src/app/models/internship.model';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { InternshipService } from 'src/app/services/internship.service';
 
@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {
  internships: Internship[] = [];
 
  constructor(private internshipService: InternshipService, private router: Router) {}
 
  ngOnInit(): void {
    this.loadInternships();
  }
 
  loadInternships(): void {
    this.internshipService.getAllInternships().subscribe(
      (data) => {
        this.internships = data;
      },
      (error) => {
        console.error('Error fetching internships', error);
      }
    );
  }
 
  applyForInternship(internship: Internship): void {
    const application: InternshipApplication = {
      InternshipId: internship.InternshipId,
      UserId: 0,
      UniversityName: '',
      DegreeProgram: '',
      Resume: '',
      ApplicationStatus: '',
      ApplicationDate: ''
    }; // Pass the required data
    this.internshipService.addInternshipApplication(application).subscribe(
      (response) => {
        console.log('Applied for internship successfully', response);
        this.loadInternships(); // Refresh the list to update the application status
      },
      (error) => {
        console.error('Error applying for internship', error);
      }
    );
  }
 
  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
 
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
 
 