import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {
  productdetails:any
  total:any

  deletCartItem(id:any){
    this.productservice.deleteCartItem(id).subscribe((res:any)=>{
      console.log(res)
      alert("Item removed from the cart")
      this.ngOnInit()
    })
  }
  constructor(private productservice:ProductserviceService,private tokenservice:TokenserviceService){}
  ngOnInit() {
    this.productservice.viewCartItemByuserid(this.tokenservice.getUser()._id).subscribe((res:any)=>{

      console.log(res)
      this.productdetails=res
      this.productservice.cart=res
      let sum=0
      for(let i=0;i<this.productdetails.length;i++){
        sum=sum+this.productdetails[i].price
      }
      console.log(sum)
      this.total=sum
    })
  }
}
