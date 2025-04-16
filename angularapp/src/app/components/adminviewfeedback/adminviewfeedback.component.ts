import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Feedback } from 'src/app/models/feedback.model';
import { Internship } from 'src/app/models/internship.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-adminviewfeedback',
  templateUrl: './adminviewfeedback.component.html',
  styleUrls: ['./adminviewfeedback.component.css']
})
export class AdminviewfeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];
  feedbackUsernames: { [key: number]: string } = {};
  selectedFeedback: Feedback | null = null;
  showProfileModal: boolean = false;
  showLogoutModal: boolean = false;
  errorMessage: string = '';
  Username: string = '';
  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.loadFeedbacks();
    this.Username = localStorage.getItem('userName') || '';
  }

  loadFeedbacks(): void {
    this.feedbackService.getFeedbacks().subscribe(
      (data) => {
        console.log('Loading feedbacks...');
        this.feedbacks = data;
        this.loadUsernames(); // Call after feedbacks are loaded
        console.log(this.feedbacks);
        if (this.feedbacks.length === 0) {
          this.errorMessage = 'No data found';
        }
      },
      (error) => {
        console.error('Error fetching feedbacks:', error);
        this.errorMessage = 'Failed to load feedbacks.';
      }
    );
  }

  loadUsernames(): void {
    console.log('Loading usernames...');
    this.feedbacks.forEach(feedback => {
      this.feedbackService.getFeedbacksByUserId(feedback.UserId).subscribe(
        feedbacks => {
          if (feedbacks.length > 0) {
            const username = feedback[0].username; // Assuming the Feedback object has a username property
            console.log(`Username for user ID ${feedback.UserId} is: ${username}`);
            this.feedbackUsernames[feedback.UserId] = username;
          } else {
            this.feedbackUsernames[feedback.UserId] = 'Unknown';
          }
        },
        error => {
          console.error('Error fetching username:', error);
          this.feedbackUsernames[feedback.UserId] = 'Unknown';
        }
      );
    });
  }

  showProfile(feedback: Feedback): void {
    this.selectedFeedback = feedback;
    this.showProfileModal = true;
  }

  closeProfileModal(): void {
    this.showProfileModal = false;
    this.selectedFeedback = null;
  }

  confirmLogout(): void {
    this.showLogoutModal = true;
  }

  closeLogoutModal(): void {
    this.showLogoutModal = false;
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  // Pagination methods
  get paginatedFeedbacks(): Feedback[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.feedbacks.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.feedbacks.length) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.feedbacks.length / this.itemsPerPage);
  }

}

 

