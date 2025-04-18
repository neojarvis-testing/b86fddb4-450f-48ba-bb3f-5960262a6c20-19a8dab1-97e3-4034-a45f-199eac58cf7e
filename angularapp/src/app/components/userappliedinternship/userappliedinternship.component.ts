import { Component, OnInit } from '@angular/core';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { InternshipService } from 'src/app/services/internship.service';
import { AuthService } from 'src/app/services/auth.service';
import { Internship } from 'src/app/models/internship.model';


@Component({
  selector: 'app-userappliedinternship',
  templateUrl: './userappliedinternship.component.html',
  styleUrls: ['./userappliedinternship.component.css']
})
export class UserappliedinternshipComponent implements OnInit {
  appliedInternships: { application: InternshipApplication, internship: Internship }[] = [];
  filteredInternships: { application: InternshipApplication, internship: Internship }[] = [];
  searchQuery: string = '';
  currentPage: number = 1;
  internshipsPerPage: number = 10;
  selectedResumeUrl: string | null = null;

  constructor(
    private internshipService: InternshipService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const userIdString = this.authService.getUserIdFromToken(token);
      const userId = Number(userIdString); //Convert string to number
      this.loadAppliedInternships(userId);
    } else {
      console.error('Token not found in local storage');
    }
  }

  loadAppliedInternships(userId: number): void {
    this.internshipService.getAppliedInternships(userId).subscribe(
      (applications) => {
        this.appliedInternships = [];
        applications.forEach(application => {
          this.internshipService.getInternshipById(application.InternshipId).subscribe(
            (internship) => {
              console.log(internship);
              this.appliedInternships.push({ application, internship });
              this.updateFilteredInternships();
            },
            (error) => console.error('Error fetching internship details:', error)
          );
        });
      },
      (error) => console.error('Error fetching internships:', error)
    );
  }

  searchInternships(): void {
    this.currentPage = 1;
    this.updateFilteredInternships();
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updateFilteredInternships();
  }

  updateFilteredInternships(): void {
    let filtered = this.appliedInternships;
    if (this.searchQuery) {
      filtered = filtered.filter(item => {
        return item.internship.CompanyName.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
    const startIndex = (this.currentPage - 1) * this.internshipsPerPage;
    const endIndex = startIndex + this.internshipsPerPage;
    this.filteredInternships = filtered.slice(startIndex, endIndex);
  }

  confirmDelete(internshipId: number): void {
    if (confirm('Are you sure you want to delete this application?')) {
      this.deleteInternship(internshipId);
    }
  }

  deleteInternship(internshipId: number): void {
    this.internshipService.deleteInternshipApplication(internshipId).subscribe(
      () => {
        this.appliedInternships = this.appliedInternships.filter(
          (item) => item.application.InternshipApplicationId !== internshipId
        );
        this.updateFilteredInternships();
      },
      (error) => console.error('Error deleting internship:', error)
    );
  }

  getTotalPages(): number {
    return Math.ceil(this.appliedInternships.length / this.internshipsPerPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredInternships();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
      this.updateFilteredInternships();
    }
  }

  openResume(resumeUrl: string): void {
    this.selectedResumeUrl = resumeUrl;
  }

  


  closeResume() {
    console.log('closeResume function called');
    this.selectedResumeUrl = null;
  }
  
  


}