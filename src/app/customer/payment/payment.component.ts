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
  orderdetails:any
  loading = false;
  constructor(private productservice:ProductserviceService){}
  onSubmit() {
    // TODO: Process checkout data here
    console.warn(this.paymentForm.value);
    const paymentdetails={
      "order":this.orderdetails._id,
      "product":this.orderdetails.product._id,
      "customerid":this.orderdetails.user._id,
      "user":this.orderdetails.vendorid,
      "stock":this.orderdetails.product.stock,
      "qty":this.orderdetails.qty
    }
    this.loading = true;

      // Simulating payment process delay
      setTimeout(() => {
        this.loading = false;
        this.productservice.startPayment(paymentdetails).subscribe((res:any)=>{
          console.log(res)
          
        })
      }, 2000);
   
  }
  ngOnInit() {
    this.paymentForm = new FormGroup({
      ccName: new FormControl('', Validators.required),
      ccNumber: new FormControl('', Validators.required),
      ccExpiration: new FormControl('', Validators.required),
      ccCvv: new FormControl('', Validators.required)
    });


    this.productservice.getOrderById("6471099645c8e75258e1c15f").subscribe((res:any)=>{
      console.log(res)
      this.orderdetails=res
    })
  }
}
