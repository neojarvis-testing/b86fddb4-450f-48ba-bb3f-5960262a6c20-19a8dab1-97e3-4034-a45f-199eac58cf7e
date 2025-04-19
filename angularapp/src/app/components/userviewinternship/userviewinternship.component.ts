import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Internship } from 'src/app/models/internship.model';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { InternshipService } from 'src/app/services/internship.service';
 
@Component({
  selector: 'app-userviewinternship',
  templateUrl: './userviewinternship.component.html',
  styleUrls: ['./userviewinternship.component.css']
})
export class UserviewinternshipComponent implements OnInit {
   
 
  constructor(private internshipservice:InternshipService, private router:Router) { } 
  internships: Internship[] = []; // List of internships
  appliedInternships: Set<number> = new Set(); // Track applied internships locally
  paginatedInternships = []; // Internships to display on the current page
  itemsPerPage = 6; // Number of cards per page
  currentPage = 0;
  errorMessage = '';

  

  ngOnInit(): void {
    this.allInternships();
    this.paginateInternships();
  }

  allInternships(): void {
    this.internshipservice.getAllInternships().subscribe(
      (data: Internship[]) => {
        this.internships = data; // Load internships from API
      },
      (error) => {
        console.error('Error fetching internships:', error);
      }
    );
  }
  paginateInternships(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedInternships = this.internships.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateInternships();
    }
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.internships.length) {
      this.currentPage++;
      this.paginateInternships();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.internships.length / this.itemsPerPage);
  }

  applyInternship(id: number): void {
    // Mark the internship as applied locally
    this.appliedInternships.add(id);

    // Navigate to the internship application form
    this.router.navigate([`/internshipform/${id}`]);
  }

  isApplied(id: number): boolean {
    // Check if the internship has been applied to
    return this.appliedInternships.has(id);
  }
}