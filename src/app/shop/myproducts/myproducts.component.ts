import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent {
  dtTrigger: any
shopid:any
myproducts:any
dtOptions: DataTables.Settings = {};
  constructor(private productservice:ProductserviceService,private tokenservice:TokenserviceService){}

  ngOnInit() {
    let userid=this.tokenservice.getUser()._id
    console.log(userid)
    this.productservice.getShopId(userid).subscribe((res:any)=>{

      console.log(res)
      this.shopid=res._id
      this.productservice.getProductsByShopId(this.shopid).subscribe((res2:any)=>{
        console.log(res2)
        this.myproducts=res2
        this.dtTrigger.next();
      })
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
 
}
