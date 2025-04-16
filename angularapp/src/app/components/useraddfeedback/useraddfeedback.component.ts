import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-useraddfeedback',
  templateUrl: './useraddfeedback.component.html',
  styleUrls: ['./useraddfeedback.component.css']
})
export class UseraddfeedbackComponent implements OnInit {

  feedback: string = '';
  feedbackRequired: boolean = false;
  showPopup: boolean = false;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

  submitFeedback() {
    if (this.feedback.trim() === '') {
      this.feedbackRequired = true;
      return;
    }

    this.feedbackRequired = false;

    const feedbackData: Feedback = {
      UserId: 0, // Replace with actual user ID
      FeedbackText: this.feedback,
      Date: new Date()
    };

    this.feedbackService.addFeedback(feedbackData).subscribe(
      response => {
        this.showPopup = true;
      },
      error => {
        console.error('Error submitting feedback', error);
      }
    );
  }

  closePopup() {
    this.showPopup = false;
    this.feedback = ''; // Clear the feedback textarea
  }
}


