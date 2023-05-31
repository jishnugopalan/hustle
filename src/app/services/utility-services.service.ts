import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'http://localhost:3000/api/';
@Injectable({
  providedIn: 'root'
})
export class UtilityServicesService {
  city:any;
  constructor(private http:HttpClient) { }

  public getCity(){

    return this.http.post("https://countriesnow.space/api/v0.1/countries/state/cities",{
      "country":"India",
      "state":"Kerala"
    })

  }
  public getProfile(id:any){
    return this.http.post(AUTH_API+'getuserprofile',{"userid":id})
  }
  public updatePhone(id:any,phone:any){
    return this.http.post(AUTH_API+'updatephone',{"userid":id,"phone":phone})
  }
  public updatePassword(upd:any){
    return this.http.post(AUTH_API+'updatepassword',upd)
  }
  public updateSecurity(email:any,password:any,security_question:any,security_answer:any){
    return this.http.post(AUTH_API+'updatesecurity',{"email":email,"password":password,"security_question":security_question,"security_answer":security_answer})
  }
  public forgotpassword(upd:any){
    return this.http.post(AUTH_API+'forgotpassword',upd)
  }
  ngOnInit() {
    
  }
}
