import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userviewfeedback',
  templateUrl: './userviewfeedback.component.html',
  styleUrls: ['./userviewfeedback.component.css']
})
export class UserviewfeedbackComponent implements OnInit {
 
  feedbacks: Feedback[] = [];
  selectedFeedback: Feedback | null = null;
  showDeleteModal: boolean = false;
  showProfileModal:boolean=false;
  showLogoutModal: boolean = false;
  errorMessage: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  paginatedFeedbacks: Feedback[] = [];
  feedbackUsernames: { [key: number]: string } = {};
  constructor(private feedbackService: FeedbackService, private router: Router) {}
 
  ngOnInit(): void {
    this.loadFeedbacks();
  }
 
  loadFeedbacks(): void {
    const userId = parseInt(localStorage.getItem('userId') || '0');
    if (userId) {
      this.feedbackService. getFeedbacksByUserId(userId).subscribe(
        (data) => {
          this.feedbacks = data;
          this.paginateFeedbacks();
          if (this.feedbacks.length === 0) {
            this.errorMessage = 'No data found';
          }
        },
        (error) => {
          console.error('Error fetching feedbacks:', error);
          this.errorMessage = 'No Feedbacks Found.';
        }
      );
    }
  }
 
  paginateFeedbacks(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedFeedbacks = this.feedbacks.slice(start, end);
  }
 
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateFeedbacks();
    }
  }
 
  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.feedbacks.length) {
      this.currentPage++;
      this.paginateFeedbacks();
    }
  }
 
  getTotalPages(): number {
    return Math.ceil(this.feedbacks.length / this.itemsPerPage);
  }
 
  showProfile(feedback: Feedback): void {
    this.selectedFeedback = feedback;
    this.showProfileModal = true;
  }
 
  closeProfileModal(): void {
    this.showProfileModal = false;
  }
 
  confirmDelete(feedback: Feedback): void {
    this.selectedFeedback = feedback;
    this.showDeleteModal = true;
  }
 
  deleteFeedback(): void {
    if (this.selectedFeedback) {
      this.feedbackService.deleteFeedback(this.selectedFeedback.FeedbackId!).subscribe(
        () => {
          this.showDeleteModal = false;
          this.loadFeedbacks(); // Reload feedbacks to reflect the deletion
         
          // Show SweetAlert2 success message
          Swal.fire({
            title: 'Feedback Deleted',
            text: 'The feedback has been successfully deleted!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['user/userviewfeedback']);
        },
        (error) => {
          console.error('Error deleting feedback:', error);
          this.errorMessage = 'Failed to delete feedback.';
        }
      );
    }
  }
 
  logout(): void {
    this.showLogoutModal = true;
  }
 
  confirmLogout(): void {
    this.showLogoutModal = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
 
  cancelLogout(): void {
    this.showLogoutModal = false;
  }
 
 
}
 
 