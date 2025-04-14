import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl='';

  constructor(private http:HttpClient) { }

  register(user:User):Observable<any>
  {
    return this.http.post<any>(`${this.apiUrl}/api/register`,user);
  }

  login(login:Login):Observable<any>
  {
    return this.http.post<any>(`${this.apiUrl}/api/login`,login).pipe(
      tap(response=>
      {
        const user=response.user;
        localStorage.setItem('role',response.role);
        localStorage.setItem('currentUser'.JSON.stringify(response));
      }),
      catchError(this.handleError<any>('login'))
      
    );
  }
   
  
}

