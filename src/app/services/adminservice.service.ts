import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const AUTH_API = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
  public addShipper(userdetails:any): Observable<any> {
    return this.http.post(AUTH_API + 'addshipper',userdetails);
  }
  public addCategory(userdetails:any): Observable<any> {
    return this.http.post(AUTH_API + 'addcategory',userdetails);
  }
  public addSubcategory(userdetails:any): Observable<any> {
    return this.http.post(AUTH_API + 'addsubcategory',userdetails);
  }
  public getAllShop(){
    return this.http.post(AUTH_API + 'getallshop',{});
  }
  public updateShopStatus(shopid:any,status:any){
    return this.http.post(AUTH_API + 'updateshopstatus',{"shopid":shopid,"status":status});
  }
}
