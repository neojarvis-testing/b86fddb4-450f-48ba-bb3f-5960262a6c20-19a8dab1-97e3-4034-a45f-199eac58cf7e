import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Internship } from '../models/internship.model';
import { InternshipApplication } from '../models/internshipapplication.model';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  public baseUrl="";

  constructor(private http:HttpClient) { }
  
    private getAuthHeaders(): HttpHeaders {
        const token = localStorage.getItem('token');
        return new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        });
      }
    

  getAllInternships():Observable<Internship[]>
  {
    return this.http.get<Internship[]>(`${this.baseUrl}/api/internship`);
  }
  
  getInternshipById(id:number):Observable<Internship>{
    return this.http.get<Internship>(`${this.baseUrl}/api/internship/${id}`);
   }
   addInternship(requestObject:Internship):Observable<Internship>{
     return this.http.post<Internship>(`${this.baseUrl}/api/`,requestObject);
   }
   updateInternship(id:number,requestObject:Internship):Observable<Internship>{
     return this.http.put<Internship>(`${this.baseUrl}/api/internship/${id}`,library);
   }
   deleteInternship(internshipId:number):Observable<void>{
     return this.http.delete<void>(`${this.baseUrl}api/internship/${internshipId}`);
   }
   addInternshipApplication(data:InternshipApplication):Observable<InternshipApplication>
   {
    return this.http.post<InternshipApplication>(`${this.baseUrl}/api/internship-application` data);
   }
   getAppliedInternships(userId:number):Observable<InternshipApplication[]>
   {
    return this.http.get<InternshipApplication[]>(`${this.baseUrl}/api/internship-application/${userId}`);
   }
   deleteInternshipApplication(internshipId:number):Observable<void>
   {
    return this.http.delete<void>(`${this.baseUrl}/api/intership-application/${internshipId}`);
   }
   

  getAllInternshipApplications(): Observable<InternshipApplication[]> {
    return this.http.get<InternshipApplication[]>(this.baseUrl, { headers: this.getAuthHeaders() });
    }
  
    // Update the status of an internship application
    updateApplicationStatus(id: number, internshipApplication: InternshipApplication): Observable<InternshipApplication> {
      return this.http.put<InternshipApplication>(`${this.baseUrl}/${id}`, internshipApplication, { headers: this.getAuthHeaders() });
    }
  }


  
 
 


