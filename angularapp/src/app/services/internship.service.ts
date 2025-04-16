<<<<<<< HEAD
=======
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Internship } from '../models/internship.model';
// import { InternshipApplication } from '../models/internshipapplication.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class InternshipService {
//   public baseUrl="";

//   constructor(private http:HttpClient) { }

//   getAllInternships():Observable<Internship[]>
//   {
//     return this.http.get<Internship[]>(`${this.baseUrl}/api/internship`);
//   }
  
//   getInternshipById(id:number):Observable<Internship>{
//     return this.http.get<Internship>(`${this.baseUrl}/api/internship/${id}`);
//    }
//    addInternship(requestObject:Internship):Observable<Internship>{
//      return this.http.post<Internship>(`${this.baseUrl}/api/`,requestObject);
//    }
//    updateInternship(id:number,requestObject:Internship):Observable<Internship>{
//      return this.http.put<Internship>(`${this.baseUrl}/api/internship/${id}`,requestObject);
//    }
//    deleteInternship(internshipId:number):Observable<void>{
//      return this.http.delete<void>(`${this.baseUrl}api/internship/${internshipId}`);
//    }
//    addInternshipApplication(data:InternshipApplication):Observable<InternshipApplication>
//    {
//     return this.http.post<InternshipApplication>(`${this.baseUrl}/api/internship-application` ,data);
//    }
//    getAppliedInternships(userId:number):Observable<InternshipApplication[]>
//    {
//     return this.http.get<InternshipApplication[]>(`${this.baseUrl}/api/internship-application/${userId}`);
//    }
//   //  deleteAppliedInternships(internshipId:number):Observable<void>
//   //  {
//   //   return this.http.delete<void>
//   //  }
//  }

>>>>>>> 2fbe61e4e8dfdf78d557f0833c3d9fd4f3898c49
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Internship } from '../models/internship.model';
import { InternshipApplication } from '../models/internshipapplication.model';
<<<<<<< HEAD

=======
 
>>>>>>> 2fbe61e4e8dfdf78d557f0833c3d9fd4f3898c49
@Injectable({
  providedIn: 'root'
})
export class InternshipService {
    getRequestedInternships() {
        throw new Error('Method not implemented.');
    }
    approveInternship(id: number) {
        throw new Error('Method not implemented.');
    }
    rejectInternship(id: number) {
        throw new Error('Method not implemented.');
    }
  public baseUrl="";
 
  constructor(private http:HttpClient) { }
<<<<<<< HEAD

  
    private getAuthHeaders(): HttpHeaders {
        const token = localStorage.getItem('token');
        return new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        });
      }
    

=======
 
 
    private getAuthHeaders(): HttpHeaders {
        const token = localStorage.getItem('token');
        return new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        });
      }
   
 
>>>>>>> 2fbe61e4e8dfdf78d557f0833c3d9fd4f3898c49
  getAllInternships():Observable<Internship[]>
  {
    return this.http.get<Internship[]>(`${this.baseUrl}/api/internship`,{ headers: this.getAuthHeaders() });
  }
 
  getInternshipById(id:number):Observable<Internship>{
    return this.http.get<Internship>(`${this.baseUrl}/api/internship/${id}`,{ headers: this.getAuthHeaders() });
   }
   addInternship(requestObject:Internship):Observable<Internship>{
     return this.http.post<Internship>(`${this.baseUrl}/api/`,requestObject,{ headers: this.getAuthHeaders() });
   }
   updateInternship(id:number,requestObject:Internship):Observable<Internship>{
     return this.http.put<Internship>(`${this.baseUrl}/api/internship/${id}`,requestObject,{ headers: this.getAuthHeaders() });
   }
   deleteInternship(internshipId:number):Observable<void>{
     return this.http.delete<void>(`${this.baseUrl}api/internship/${internshipId}`,{ headers: this.getAuthHeaders() });
   }
   addInternshipApplication(data:InternshipApplication):Observable<InternshipApplication>
   {
    return this.http.post<InternshipApplication>(`${this.baseUrl}/api/internship-application`, data,{ headers: this.getAuthHeaders() });
   }
   getAppliedInternships(userId:number):Observable<InternshipApplication[]>
   {
    return this.http.get<InternshipApplication[]>(`${this.baseUrl}/api/internship-application/${userId}`,{ headers: this.getAuthHeaders() });
   }
   deleteInternshipApplication(internshipId:number):Observable<void>
   {
<<<<<<< HEAD
    
    return this.http.delete<void>(`${this.baseUrl}/api/intership-application/${internshipId}`,{ headers: this.getAuthHeaders() });
   }
   

  getAllInternshipApplications(): Observable<InternshipApplication[]> {
    return this.http.get<InternshipApplication[]>(`${this.baseUrl}/api/internship-application`, { headers: this.getAuthHeaders() });
    }
  
    // Update the status of an internship application
    updateApplicationStatus(id: number, internshipApplication: InternshipApplication): Observable<InternshipApplication> {
      return this.http.put<InternshipApplication>(`${this.baseUrl}/api/internship-application/${id}`, internshipApplication, { headers: this.getAuthHeaders() });
    }
  }


  
=======
   
    return this.http.delete<void>(`${this.baseUrl}/api/intership-application/${internshipId}`,{ headers: this.getAuthHeaders() });
   }
   
 
  getAllInternshipApplications(): Observable<InternshipApplication[]> {
    return this.http.get<InternshipApplication[]>(`${this.baseUrl}/api/internship-application`, { headers: this.getAuthHeaders() });
    }
 
    // Update the status of an internship application
    updateApplicationStatus(id: number, internshipApplication: InternshipApplication): Observable<InternshipApplication> {
      return this.http.put<InternshipApplication>(`${this.baseUrl}/api/internship-application/${id}`, internshipApplication, { headers: this.getAuthHeaders() });
    }
  }
 
 
 
 
 
 
 
 
>>>>>>> 2fbe61e4e8dfdf78d557f0833c3d9fd4f3898c49
 
 


