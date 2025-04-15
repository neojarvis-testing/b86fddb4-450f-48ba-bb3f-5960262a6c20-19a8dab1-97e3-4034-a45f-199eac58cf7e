import { Component, OnInit } from '@angular/core';
import { InternshipApplication } from 'src/app/models/internshipapplication.model';
import { InternshipService } from 'src/app/services/internship.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userappliedinternship',
  templateUrl: './userappliedinternship.component.html',
  styleUrls: ['./userappliedinternship.component.css']
})
export class UserappliedinternshipComponent implements OnInit {
  // appliedInternships: InternshipApplication[] = [];
  // filteredInternships: InternshipApplication[] = [];
  // searchQuery: string = '';
  // // Pagination variables
  // currentPage: number = 1;
  // internshipsPerPage: number = 10;

  constructor(private internshipService: InternshipService, private authService: AuthService ) {}

  ngOnInit(): void {
  //   const userId = this.authService.getUserIdFromToken(localStorage.getItem('token')!);
  //  this.loadAppliedInternships(userId);
  }

  //  loadAppliedInternships(userId: number): void {
  //   this.internshipService.getAppliedInternships(userId).subscribe(
  //     (requests) => {
  //       this.appliedInternships = requests;
  //       this.updateFilteredInternships();
  //     },
  //     (error) => console.error('Error fetching internships:', error)
  //   );
  // }

  // searchInternships(): void {
  //   this.currentPage = 1;
  //   this.updateFilteredInternships();
  // }

  // changePage(page: number): void {
  //   this.currentPage = page;
  //   this.updateFilteredInternships();
  // }

  // updateFilteredInternships(): void {
  //   let filtered = this.appliedInternships;
  //   if (this.searchQuery) {
  //     filtered = filtered.filter(request => {
  //       return request.Internship.CompanyName.toLowerCase().includes(this.searchQuery.toLowerCase());
  //     });
  //   }
  //   const startIndex = (this.currentPage - 1) * this.internshipsPerPage;
  //   const endIndex = startIndex + this.internshipsPerPage;
  //   this.filteredInternships = filtered.slice(startIndex, endIndex);
  // }

  // confirmDelete(requestId: number): void {
  //   if (confirm('Are you sure you want to delete this internship request?')) {
  //     this.deleteInternship(requestId);
  //   }
  // }

  // deleteInternship(requestId: number): void {
  //   this.internshipService.deleteInternshipRequest(requestId).subscribe(
  //     () => {
  //       this.appliedInternships = this.appliedInternships.filter(
  //         (request) => request.InternshipRequestId !== requestId
  //       );
  //       this.updateFilteredInternships();
  //     },
  //     (error) => console.error('Error deleting internship:', error)
  //   );
  // }

  // getTotalPages(): number {
  //   return Math.ceil(this.appliedInternships.length / this.internshipsPerPage);
  // }

  // previousPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.updateFilteredInternships();
  //   }
  // }

  // nextPage(): void {
  //   if (this.currentPage < this.getTotalPages()) {
  //     this.currentPage++;
  //     this.updateFilteredInternships();
  //   }
  // }



}
