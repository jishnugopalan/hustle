import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentForm:any
  orderdetails:any[]=[];
  // order: string[] = [];
  loading = false;
  transaction=true;
  total=0
  constructor(private productservice:ProductserviceService){}
  onSubmit() {
    // TODO: Process checkout data here
    console.warn(this.paymentForm.value);

    
    this.loading = true;

     // Simulating payment process delay
      setTimeout(() => {
        this.loading = false;
        var x=0
        for(let i=0;i<this.orderdetails.length;i++){
          const paymentdetails={
            "order":this.orderdetails[i]._id,
            "product":this.orderdetails[i].product._id,
            "customerid":this.orderdetails[i].user._id,
            "user":this.orderdetails[i].vendorid,
            "stock":this.orderdetails[i].product.stock,
            "qty":this.orderdetails[i].qty
          }
          this.productservice.startPayment(paymentdetails).subscribe((res:any)=>{
            console.log(res)
            x=x+1
            if(x==this.orderdetails.length){
              this.productservice.order=[]
              this.transaction=false
            }
            
            
          })
        }
        
      }, 2000);
   
  }
  ngOnInit() {
    this.paymentForm = new FormGroup({
      ccName: new FormControl('', Validators.required),
      ccNumber: new FormControl('', Validators.required),
      ccExpiration: new FormControl('', Validators.required),
      ccCvv: new FormControl('', Validators.required)
    });

    console.log(this.productservice.order)
    var s=0;
    for(let i=0;i<this.productservice.order.length;i++){
      this.productservice.getOrderById(this.productservice.order[i]).subscribe((res:any)=>{
      console.log(res)
      this.total=this.total+res.total_price
      this.orderdetails.push(res)
    })
    }

    // this.productservice.getOrderById("6471099645c8e75258e1c15f").subscribe((res:any)=>{
    //   console.log(res)
    //   this.orderdetails=res
    // })
  }
}
