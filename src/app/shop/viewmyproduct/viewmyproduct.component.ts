import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-viewmyproduct',
  templateUrl: './viewmyproduct.component.html',
  styleUrls: ['./viewmyproduct.component.css']
})
export class ViewmyproductComponent {
  id: any;
  productdetails:any
  price:any
  stock:any
  discount:any
  availability:any
  constructor(private route: ActivatedRoute,private productSerice:ProductserviceService) { }

  updatePrice(){
    this.productSerice.updateProductPrice(this.id,this.price).subscribe((res:any)=>{
      console.log(res)
      this.productdetails.price=this.price
    })
  }
  updateStock(){
    this.productSerice.updateProductStock(this.id,this.stock).subscribe((res:any)=>{
      console.log(res)
      this.productdetails.stock=this.stock
    })
  }
  updateDiscount(){
    this.productSerice.updateProductDiscount(this.id,this.discount).subscribe((res:any)=>{
      console.log(res)
      this.productdetails.discount_percentage=this.discount
    })
  }
  updateProductAvailability(){
    this.productSerice.updateProductAvailability(this.id,this.availability).subscribe((res:any)=>{
      console.log(res)
      this.productdetails.availability=this.availability
    })
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productid');
    console.log(this.id)
    this.productSerice.getProductsById(this.route.snapshot.paramMap.get('productid')).subscribe((res:any)=>{
      console.log(res)
      this.productdetails=res
      this.price=res.price
      this.stock=res.stock
      this.discount=res.discount_percentage
      this.availability=res.availability
    })
  }
}
