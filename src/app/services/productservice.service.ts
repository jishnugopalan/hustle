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
  public getProductsById(productid:any){
    return this.http.post(AUTH_API+'getproductbyid',{"productid":productid}) 
  }
  public getAllProduct(){
    return this.http.post(AUTH_API+'getallproducts',{}) 
  }
  public getProductByCategory(categoryid:any){
    return this.http.post(AUTH_API+'getproductbycategory',{"categoryid":categoryid}) 
  }
  public getProductBySubcategory(subcategoryid:any){
    return this.http.post(AUTH_API+'getproductbysubcategory',{"subcategoryid":subcategoryid}) 

  }

  //update
  public updateProductStock(productid:any,stock:any){
    return this.http.post(AUTH_API+'updateproductstock',{"productid":productid,"stock":stock}) 
  }
  public updateProductPrice(productid:any,price:any){
    return this.http.post(AUTH_API+'updateproductprice',{"productid":productid,"price":price}) 
  }
  public updateProductDiscount(productid:any,discount:any){
    return this.http.post(AUTH_API+'updateproductsdiscount',{"productid":productid,"discount_percentage":discount}) 
  }
  public updateProductAvailability(productid:any,availability:any){
    return this.http.post(AUTH_API+'updateproductsavailability',{"productid":productid,"availability":availability}) 
  }

  //shipping
  public getShippingAddress(userid:any){
    return this.http.post(AUTH_API+'getallshipping',{"user":userid}) 
  }
  public addShippingAddress(shippingdetails:any){
    return this.http.post(AUTH_API+'addshipping',shippingdetails) 
  }

  //order
  public confirmOrder(orderdetails:any){
    return this.http.post(AUTH_API+'createorder',orderdetails) 
  }
  public getOrderById(orderid:any){
    return this.http.post(AUTH_API+'vieworderbyid',{"orderid":orderid}) 
  }
  public getOrderByCustomerId(userid:any){
    return this.http.post(AUTH_API+'vieworderbycustomerid',{"userid":userid}) 
  
  }
  public getOrderByVendorId(userid:any){
    return this.http.post(AUTH_API+'vieworderbyvendorid',{"userid":userid}) 
  
  }


  //payment
  public startPayment(paymentdetails:any){
    return this.http.post(AUTH_API+'startpayment',paymentdetails) 
  }

  //shipper
  public viewAllOrderShipper(){
    return this.http.post(AUTH_API+'viewall',{})
  }
  public setOrder(orderdetails:any){
    return this.http.post(AUTH_API+'setorder',orderdetails)
  }
  public viewOrderByShipper(userid:any){
    return this.http.post(AUTH_API+'vieworderbyshipper',{"userid":userid})
  }
  public updateByShipper(order:any,status:any){
    return this.http.post(AUTH_API+'updateorder',{"order":order,"status":status})
  }
  public viewOrderByShipperId(id:any){
    return this.http.post(AUTH_API+'viewshipperordeerbyid',{"id":id})
  }
  public viewShippingByOrderId(id:any){
    return this.http.post(AUTH_API+'findbyorderid',{"id":id})
  }

}
