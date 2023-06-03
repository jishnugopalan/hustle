import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityServicesService } from '../services/utility-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  form!: FormGroup;
email:any
isuser=false
userdetails:any
sq:any
sa:any
iscon=false
  constructor(private formBuilder: FormBuilder,private service:UtilityServicesService,private router:Router) {}
  submitForm(){
    console.log(this.email)
    console.log(this.sq)
    console.log(this.sa)
    const f={
      "email":this.email,
      "security_question":this.sq,
      "security_answer":this.sa
    }
    if(this.sa!=undefined){
      this.service.forgotpassword(f).subscribe((res:any)=>{
        console.log(res)
        this.iscon=true
      },error=>{
        alert("Security answer not matching")
      })
    }
  }
  submitForm2(){
    this.service.updateforgotpassword(this.email,this.form.value.password).subscribe((res:any)=>{
      console.log(res)
      alert("Password updated successfully")
      this.router.navigateByUrl("/")
    },error=>{
      alert("Error in password update")
    })
  }
  getUser(){
    console.log(this.email)
    if(this.email==undefined){
     alert("Please add an email")
    }else{
      this.service.getuserbyemail(this.email).subscribe((res:any)=>{
        console.log(res)
        this.isuser=true
    this.email=res.email
        this.sq=res.security_question

      },error=>{
        alert("User not found with this email id")
      })
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl?.value && confirmPasswordControl?.value) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (password === confirmPassword) {
        confirmPasswordControl.setErrors(null);
      } else {
        confirmPasswordControl.setErrors({ mismatch: true });
      }
    }
  }

}
