import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const AUTH_API = 'http://localhost:3000/api/';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
  public addProduct(product:any):Observable<any>{
    return this.http.post(AUTH_API + 'product',product);
  }
  public getAllCategory(){
    return this.http.get(AUTH_API+'getallcategory')
  }
  public getSubcategoryByCategoryId(categoryid:any){
    return this.http.post(AUTH_API+'getsubcategorybyid',{"categoryid":categoryid}) 
  }
  public getShopId(userid:any){
    return this.http.post(AUTH_API+'getshopid',{"userid":userid}) 
  }
  public getProductsByShopId(shopid:any){
    return this.http.post(AUTH_API+'getproductbyshopid',{"shopid":shopid}) 
  }
  
}
