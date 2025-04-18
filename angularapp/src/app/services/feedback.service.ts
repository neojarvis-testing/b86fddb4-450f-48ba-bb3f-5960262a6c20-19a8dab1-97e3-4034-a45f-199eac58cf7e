 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback.model';
import { environment } from 'src/environments/environment';

import { catchError } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) {}
 
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
 
  addFeedback(feedback: Feedback): Observable<Feedback> {
   
    return this.http.post<Feedback>(`${this.baseUrl}/api/feedback`, feedback, { headers: this.getAuthHeaders() });
  }
 
  getFeedbacksByUserId(userId: number): Observable<Feedback[]> {
    const url = `${this.baseUrl}/api/feedback/user/${userId}`;
    return this.http.get<Feedback[]>(url, { headers: this.getAuthHeaders() });
  }

  
  // getFeedbacksByUserId(userId: number): Observable<Feedback[]> {
  //   return this.http.get<Feedback[]>(`${this.baseUrl}/feedback/user/${userId}`, { headers: this.getHeaders() }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  

  
 
  deleteFeedback(feedbackId: number): Observable<void> {
    const url = `${this.baseUrl}/api/feedback/${feedbackId}`;
    return this.http.delete<void>(url, { headers: this.getAuthHeaders() });
  }
 
  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.baseUrl}/api/feedback`, { headers: this.getAuthHeaders() });
  }
}
 
 
 