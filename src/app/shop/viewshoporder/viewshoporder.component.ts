import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-viewshoporder',
  templateUrl: './viewshoporder.component.html',
  styleUrls: ['./viewshoporder.component.css']
})
export class ViewshoporderComponent {
id:any
orderdetails:any
  constructor(private productservice:ProductserviceService,private route:ActivatedRoute){}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('orderid');
    console.log(this.id)
    this.productservice.getOrderById(this.route.snapshot.paramMap.get('orderid')).subscribe((res:any)=>{
      console.log(res)
      this.orderdetails=res
    })
  }

}
