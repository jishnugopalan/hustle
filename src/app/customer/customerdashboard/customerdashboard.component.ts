import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { UtilityServicesService } from 'src/app/services/utility-services.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent {
  products:any
  category:any
  cat:any
  sub:any
  subcategory:any
  city:any
  c:any
  constructor(private productService:ProductserviceService,private service:UtilityServicesService){}
  getProductByCity(){
    console.log(this.c)
    this.productService.getProductByCity(this.sub,this.c).subscribe((res:any)=>{
      console.log(res)
      this.products=res
    })
  }
  getSubCategory(){
    this.productService.getProductByCategory(this.cat).subscribe((res3:any)=>{
      this.products.splice(0, this.products.length);
      this.products=res3
    })
    this.productService.getSubcategoryByCategoryId(this.cat).subscribe((res2:any)=>{
      console.log(res2)
    this.subcategory=res2
    })
  }
  getProductBySubcategory(){
    this.productService.getProductBySubcategory(this.sub).subscribe((res:any)=>{
      this.products=res
    })
  }
  ngOnInit() {
    console.log("in oninit")
    this.productService.getAllProduct().subscribe((res:any)=>{
      console.log(res)
      this.products=res
    })
    this.productService.getAllCategory().subscribe((res:any)=>{
      console.log(res)
      this.category=res
     
    })
    this.service.getCity().subscribe((res:any)=>{
      console.log(res)
      this.city=res.data
    })
    
  }

}
