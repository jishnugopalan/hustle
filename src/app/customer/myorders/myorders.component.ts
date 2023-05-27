import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent {

  orderdetails:any
  constructor(private productservice:ProductserviceService,private tokenservice:TokenserviceService){}


ngOnInit() {
  this.productservice.getOrderByCustomerId(this.tokenservice.getUser()._id).subscribe((res:any)=>{
    console.log(res)
    this.orderdetails=res
  })
}

}
