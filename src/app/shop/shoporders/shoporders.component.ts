import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-shoporders',
  templateUrl: './shoporders.component.html',
  styleUrls: ['./shoporders.component.css']
})
export class ShopordersComponent {

  orderdetails:any
  constructor(private productservice:ProductserviceService,private tokenservice:TokenserviceService){}


ngOnInit() {
  this.productservice.getOrderByVendorId(this.tokenservice.getUser()._id).subscribe((res:any)=>{
    console.log(res)
    this.orderdetails=res
  })
}
}
