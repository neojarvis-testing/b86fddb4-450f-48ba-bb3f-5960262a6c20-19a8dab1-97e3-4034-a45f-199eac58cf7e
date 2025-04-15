import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Internship } from '../models/internship.model';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  public baseUrl="";

  constructor(private http:HttpClient) { }

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
   deleteAppliedInternships(internshipId:number):Observable<void>
   {
    return this.http.delete<void>(`${this.baseUrl}/api/internship-application/${internshipId}`);
   }
 }
 


