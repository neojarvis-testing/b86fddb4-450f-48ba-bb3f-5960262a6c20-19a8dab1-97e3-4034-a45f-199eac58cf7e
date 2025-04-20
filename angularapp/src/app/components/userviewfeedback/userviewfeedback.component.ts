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
  
  columnDefs = [
    { headerName: 'ID', field: 'FeedbackId', sortable: true, filter: true },
    { headerName: 'Feedback', field: 'FeedbackText', sortable: true, filter: true, flex: 1 },
    {
      headerName: 'Actions',
      cellRenderer: (params: any) => {
        return `
          <button class="btn btn-danger btn-sm" data-action="delete">Delete</button>
        `;
      },
      flex: 1
    }
  ];

  feedbackUsernames: { [key: number]: string } = {};
  constructor(private feedbackService: FeedbackService, private router: Router) {}
 
  ngOnInit(): void {
     this.loadFeedbacks();
  }
 
  loadFeedbacks(): void {
    const userId = parseInt(localStorage.getItem('userId'));
    if (userId) {
      this.feedbackService. getFeedbacksByUserId(userId).subscribe(
        (data) => {
          this.feedbacks = data;
         
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
  onGridReady(params: any): void {
    // Add click listeners for the "Delete" button
    params.api.addEventListener('cellClicked', (event: any) => {
      const action = event.event.target.getAttribute('data-action');
      if (action === 'delete') {
        this.confirmDelete(event.data);
      }
    });
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
          this.loadFeedbacks(); 
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
 
 