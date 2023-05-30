import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent {
orderdetails:any
  constructor(private productservice:ProductserviceService,private tokenservice:TokenserviceService){}
  ngOnInit() {
    this.productservice.viewOrderByShipper(this.tokenservice.getUser()._id).subscribe((res:any)=>{
      console.log(res)
      this.orderdetails=res
    })
  }
}
