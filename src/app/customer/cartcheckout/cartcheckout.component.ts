import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-cartcheckout',
  templateUrl: './cartcheckout.component.html',
  styleUrls: ['./cartcheckout.component.css']
})
export class CartcheckoutComponent {
products:any
total:any
shipingdetails=false
addresses:any
orderForm!: FormGroup;
productid:any
qty:any
orgprice:any
productdetails:any
shippingadd=""


onSubmit(){
  console.log(this.orderForm.value)

if (this.orderForm.valid) {
  console.log(this.orderForm.value);
   this.orderForm.value.user=this.tokenservice.getUser()._id
   this.orderForm.value.fullname=this.orderForm.value.fullName
   this.orderForm.value.housename=this.orderForm.value.houseName

this.productservice.addShippingAddress(this.orderForm.value).subscribe((res:any)=>{
  console.log(res)
  this.shippingadd=res._id
  alert("Address added. You can click on confirm order to continue with new address")
  

})
} else {
  console.log("Invalid input");
}
}
  
  getAddress(addressid:any){
   this.shippingadd=addressid
  }
  confirmOrder(){
    console.log(this.shippingadd)
    if(this.shippingadd===""){
      alert("Please add ashipping address")
    }
    else{
      for(let i=0;i<this.products.length;i++){
        var vendorid="";
        this.productservice.getProductsById(this.products[i].product._id).subscribe((res:any)=>{
          console.log(res.shop.user)
          vendorid=res.shop.user
           const orderdetails={
            "product":this.products[i].product._id,
            "user":this.tokenservice.getUser()._id,
            "vendorid":vendorid,
            "qty":this.products[i].qty,
            "mrp":this.products[i].product.price,
            "total_price":this.products[i].price,
            "shipping":this.shippingadd
          }
          console.log(orderdetails)
          this.productservice.confirmOrder(orderdetails).subscribe((res2:any)=>{
          console.log(res2)
          console.log("Order confirmed"+i)
           //this.router.navigateByUrl("/payment")
          })

        })
       
      }

     
      // console.log(orderdetails)
      // this.productservice.confirmOrder(orderdetails).subscribe((res:any)=>{
      //   console.log(res)
      //   alert("Order confirmed successfully")
      //   this.router.navigateByUrl("/payment")
      // })
     
    }
  }

  constructor(private productservice:ProductserviceService,private tokenservice:TokenserviceService,private formBuilder: FormBuilder,private router:Router){}
  form = new FormGroup({
    shipping: new FormControl('')
    // other FormControls...
  });
  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      houseName: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      pincode: ['', Validators.required],
      
    });
    console.log(this.productservice.cart)
    this.products=this.productservice.cart
    let sum=0
      for(let i=0;i<this.products.length;i++){
        sum=sum+this.products[i].price
      }
      console.log(sum)
      this.total=sum

      var userid=this.tokenservice.getUser()._id

      console.log(userid)
      this.productservice.getShippingAddress(this.tokenservice.getUser()._id).subscribe((res:any)=>{
        console.log(res)
        if(res.length==0){
          this.shipingdetails=true
        }
        else{
          this.addresses=res
        }
      })
  }
}
