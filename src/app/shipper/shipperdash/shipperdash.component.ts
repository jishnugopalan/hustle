import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-shipperdash',
  templateUrl: './shipperdash.component.html',
  styleUrls: ['./shipperdash.component.css']
})
export class ShipperdashComponent {
  orderdetails:any
constructor(private productservice:ProductserviceService,private tokenservice:TokenserviceService){}

  ngOnInit() {
    this.productservice.viewAllOrderShipper().subscribe((res:any)=>{
      console.log(res)
      this.orderdetails=res
     
    })
  }
}
