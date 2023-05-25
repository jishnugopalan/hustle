import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const AUTH_API = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  public usersRegistration(userdetails:any): Observable<any> {
    return this.http.post(AUTH_API + 'register',userdetails);
  }
  public login(userdetails:any): Observable<any>{
    console.log(userdetails)
    return this.http.post(AUTH_API + 'login',userdetails); 
  }
  

}
