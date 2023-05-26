import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {
id:any
productdetails:any
orgprice:any
qty=1
  constructor(private route: ActivatedRoute,private productService:ProductserviceService){}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productid');
    console.log(this.id)
    this.productService.getProductsById(this.route.snapshot.paramMap.get('productid')).subscribe((res:any)=>{
      console.log(res)
      this.productdetails=res
      this.orgprice=res.price-(res.price*res.discount_percentage/100)
    })
    
  }

}
