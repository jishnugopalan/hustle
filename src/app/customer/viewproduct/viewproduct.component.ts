import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

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
addItemToCart(){

  var item={
    "product":this.productdetails._id,
    "user":this.tokensservice.getUser()._id,
    "qty":this.qty,
    "price":this.qty*this.orgprice
  }
  console.log(item)
  this.productService.addItemToCart(item).subscribe((res:any)=>{
    console.log(res)
    alert("Item added to cart")
  })
}
  constructor(private route: ActivatedRoute,private productService:ProductserviceService,private tokensservice:TokenserviceService){}
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
