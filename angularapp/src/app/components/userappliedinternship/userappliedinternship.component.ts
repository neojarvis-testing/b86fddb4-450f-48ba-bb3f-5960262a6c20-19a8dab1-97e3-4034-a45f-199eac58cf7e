import { Component, OnInit } from '@angular/core';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { InternshipService } from 'src/app/services/internship.service';
import { AuthService } from 'src/app/services/auth.service';
import { Internship } from 'src/app/models/internship.model';
import Swal from 'sweetalert2';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userappliedinternship',
  templateUrl: './userappliedinternship.component.html',
  styleUrls: ['./userappliedinternship.component.css']
})



export class UserappliedinternshipComponent implements OnInit {
  appliedInternships: InternshipApplication[] = [];
  filteredInternships: InternshipApplication[] = [];
  searchQuery: string = '';
  currentPage: number = 1;
  internshipsPerPage: number = 10;
  selectedResumeUrl: string | null = null;

  fileContent: string | null = null;
  fileType: string | null = null;

  constructor(
    private internshipService: InternshipService,
    private authService: AuthService
  ) { }

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
      (applications: InternshipApplication[]) => {
        console.log(applications);
        this.appliedInternships = applications;

        this.filteredInternships = [...this.appliedInternships];
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
        return item.Internship.CompanyName.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
    const startIndex = (this.currentPage - 1) * this.internshipsPerPage;
    const endIndex = startIndex + this.internshipsPerPage;
    this.filteredInternships = filtered.slice(startIndex, endIndex);
  }

  confirmDelete(internshipId: number): void {
    // if (confirm('Are you sure you want to delete this application?')) {
    //   this.deleteInternship(internshipId);
    // }
    Swal.fire({
      title: 'Are you sure you want to delete this application?',
      showCancelButton: true, // Enables the "No" button
      confirmButtonText: 'Yes', // Text for the "Yes" button
      cancelButtonText: 'No',  // Text for the "No" button
      icon: 'warning', // Optional: Adds a warning icon to the dialog
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes"
        console.log('Application deleted!');
        this.deleteInternship(internshipId);
        // Add your delete logic here
      } else if (result.isDismissed) {
        // User clicked "No" or dismissed the dialog
        console.log('Application not deleted.');
       
      }
    });
  }

  deleteInternship(internshipId: number): void {

    this.internshipService.deleteInternshipApplication(internshipId).subscribe(
      () => {
        this.filteredInternships = this.appliedInternships.filter(
          (item) => item.InternshipId !== internshipId
        );
        console.log("changed",this.filteredInternships);
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

  openResume(resumeUrl: string, resumeType: string) {
    this.selectedResumeUrl = resumeUrl;
    this.fileType = resumeType;

    if (resumeType === 'txt') {
      // Fetch the text file content
      fetch(resumeUrl)
        .then(response => response.text())
        .then(content => {
          this.fileContent = content;
        })
        .catch(error => {
          console.error('Error loading text file:', error);
        });
    } else {
      this.fileContent = null; // Clear file content for non-text files
    }
  }

  closeResume() {
    console.log('closeResume function called');
    this.selectedResumeUrl = null;
  }




}