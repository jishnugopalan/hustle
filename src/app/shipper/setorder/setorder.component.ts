import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'jquery';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-setorder',
  templateUrl: './setorder.component.html',
  styleUrls: ['./setorder.component.css']
})
export class SetorderComponent {
  orderdetails:any
  shopdetails:any
constructor(private productservice:ProductserviceService,private tokenservice:TokenserviceService,private route:ActivatedRoute){}
pickOrder(orderid:any,product:any,user:any,vendorid:any,shipping:any){
console.log(orderid)
const odetails={
  "order":orderid,
  "product":product,
  "shipping":shipping,
  "user":user,
  "vendorid":vendorid,
  "shipper":this.tokenservice.getUser()._id
}
console.log(odetails)
this.productservice.setOrder(odetails).subscribe((res:any)=>{
  console.log(res)
  this.productservice.updateByShipper(orderid,"Order Ready to Pick").subscribe((res2:any)=>{
    console.log(res2)
    alert("Order picked successfully")
    this.ngOnInit()
  })

},error=>{
  alert("This order is already picked by another partner")
})

}
ngOnInit() {
  this.productservice.getOrderById(this.route.snapshot.paramMap.get('orderid')).subscribe((res:any)=>{
    console.log(res)
    this.orderdetails=res
    this.productservice.getShopId(res.vendorid._id).subscribe((res2:any)=>{
      console.log(res2)
      this.shopdetails=res2
    })
   
  })
}
}
