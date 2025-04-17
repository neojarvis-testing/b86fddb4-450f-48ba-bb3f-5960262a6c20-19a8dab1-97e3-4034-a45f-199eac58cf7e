
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback.model';
 
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseUrl = 'https://ide-ddccbaabaafcaddfbadabadabeafeaccfe.premiumproject.examly.io/proxy/8080/';
 
  constructor(private http: HttpClient) {}
 
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
 
  addFeedback(feedback: Feedback): Observable<Feedback> {
   
    return this.http.post<Feedback>(this.baseUrl, feedback, { headers: this.getAuthHeaders() });
  }
 
  getFeedbacksByUserId(userId: number): Observable<Feedback[]> {
    const url = `${this.baseUrl}/user/${userId}`;
    return this.http.get<Feedback[]>(url, { headers: this.getAuthHeaders() });
  }
 
  deleteFeedback(feedbackId: number): Observable<void> {
    const url = `${this.baseUrl}/${feedbackId}`;
    return this.http.delete<void>(url, { headers: this.getAuthHeaders() });
  }
 
  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.baseUrl, { headers: this.getAuthHeaders() });
  }
}
 
 
