import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Internship } from 'src/app/models/internship.model';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { InternshipService } from 'src/app/services/internship.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {
  internships: Internship[] = [];

  constructor(
    private internshipService: InternshipService,
    private router: Router,
    private authService: AuthService // Inject AuthService
  ) {}

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
        alert('Failed to load internships. Please try again later.');
      }
    );
  }

  applyForInternship(internship: Internship): void {
    const userId = this.authService.getUserIdFromToken(this.authService.getToken()!); // Get the logged-in user's ID
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
        alert('Failed to apply for internship. Please try again later.');
      }
    );
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
