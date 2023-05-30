import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.css']
})
export class TrackorderComponent {
orderdetails:any
shopdetails:any
  constructor(private route:ActivatedRoute,private productservice:ProductserviceService){}
  ngOnInit() {
    this.productservice.viewShippingByOrderId(this.route.snapshot.paramMap.get('id')).subscribe((res:any)=>{
      console.log(res)
      this.orderdetails=res
      this.productservice.getShopId(res.vendorid._id).subscribe((res2:any)=>{
        console.log(res2)
        this.shopdetails=res2
      })
    })
  }
}
