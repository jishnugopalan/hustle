import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators,ValidationErrors } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 
  alert=false
  msg=""
  reg=true
  
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value
    let confirmPass = group.get('confirm_password')?.value
    return pass === confirmPass ? null : { notSame: true }
  }
  registration=new FormGroup({
    name:new FormControl('',[
      Validators.required
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    phone:new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      
      
    ]),
   
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    confirm_password:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    security_question:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
    
    ]),
    security_answer:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
    
    ]),
    usertype:new FormControl()
    
  },{validators:this.checkPasswords})

  otpForm=new FormGroup({
    otp:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
  })

  get department(){
    return this.registration.get('department')

  }
  get name(){
    return this.registration.get('name')

  }
  get email(){
    return this.registration.get('email')

  }
  get phone(){
    return this.registration.get('phone')

  }
  get password(){
    return this.registration.get('password')
  }
  get confirm_password(){
    return this.registration.get('confirm_paswword')
  }
  get security_question(){
    return this.registration.get("security_question")
  }
  get security_answer(){
    return this.registration.get("security_answer")
  }
  register(){
    this.registration.value.usertype="customer"
    console.log(this.registration.value)
    this.service.usersRegistration(this.registration.value).subscribe((res:any)=>{
      console.log(res)
      this.reg=false
      
    },error=>{
      console.log(error.error.msg)
      this.alert=true
      this.msg=error.error.msg
    })
  }
  constructor(private service:AuthserviceService){

  }
}
