import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-viewpicked',
  templateUrl: './viewpicked.component.html',
  styleUrls: ['./viewpicked.component.css']
})
export class ViewpickedComponent {
orderdetails:any
shopdetails:any
status:any
  constructor(private route:ActivatedRoute,private productservice:ProductserviceService){}

  changeStatus(){
    console.log(this.status)
    this.productservice.updateByShipper(this.orderdetails.order._id,this.status).subscribe((res:any)=>{
      console.log(res)
      alert("Order Status Changed")
      this.ngOnInit()
    })
  }
  ngOnInit() {
    this.productservice.viewOrderByShipperId(this.route.snapshot.paramMap.get('id')).subscribe((res:any)=>{
      console.log(res)
      this.orderdetails=res
      this.productservice.getShopId(res.vendorid._id).subscribe((res2:any)=>{
        console.log(res2)
        this.shopdetails=res2
      })
    })
  }
}
