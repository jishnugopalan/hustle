import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
productid:any
qty:any
orgprice:any
productdetails:any
orderForm!: FormGroup;
shipingdetails=false
addresses:any
shippingadd=""
  constructor(private route: ActivatedRoute,private productService:ProductserviceService,private formBuilder: FormBuilder,private tokenservice:TokenserviceService,private router:Router){}
  
  form = new FormGroup({
    shipping: new FormControl('')
    // other FormControls...
  });
  onSubmit(){
    console.log(this.orderForm.value)
 
  if (this.orderForm.valid) {
    console.log(this.orderForm.value);
     this.orderForm.value.user=this.tokenservice.getUser()._id
     this.orderForm.value.fullname=this.orderForm.value.fullName
     this.orderForm.value.housename=this.orderForm.value.houseName

  this.productService.addShippingAddress(this.orderForm.value).subscribe((res:any)=>{
    console.log(res)
    this.shippingadd=res._id
    alert("Address added. You can click on confirm order to continue with new address")
    
  
  })
  } else {
    console.log("Invalid input");
  }
  }
  confirmOrder(){
    console.log(this.shippingadd)
    if(this.shippingadd===""){
      alert("Please add ashipping address")
    }
    else{
      const orderdetails={
        "product":this.productid,
        "user":this.tokenservice.getUser()._id,
        "vendorid":this.productdetails.shop.user,
        "qty":this.qty,
        "mrp":this.productdetails.price-(this.productdetails.price*this.productdetails.discount_percentage/100),
        "total_price":this.qty*this.orgprice,
        "shipping":this.shippingadd
      }
      console.log(orderdetails)
      this.productService.confirmOrder(orderdetails).subscribe((res:any)=>{
        console.log(res)
        alert("Order confirmed successfully")
        this.router.navigateByUrl("/payment")
      })
     
    }
  }
  getAddress(addressid:any){
   this.shippingadd=addressid
  }
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
    this.productid = this.route.snapshot.paramMap.get('productid');
    this.qty = this.route.snapshot.paramMap.get('qty');
    this.orgprice = this.route.snapshot.paramMap.get('orgprice');
    this.productService.getProductsById(this.route.snapshot.paramMap.get('productid')).subscribe((res:any)=>{
      console.log(res)
      this.productdetails=res
      this.orgprice=res.price-(res.price*res.discount_percentage/100)
    })
    var userid=this.tokenservice.getUser()._id

    console.log(userid)
    this.productService.getShippingAddress(this.tokenservice.getUser()._id).subscribe((res:any)=>{
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
