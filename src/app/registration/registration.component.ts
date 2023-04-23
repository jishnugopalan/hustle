import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators,ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  dep:any
  reg=false
  alert=false
  msg=""
  otp=false
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value
    let confirmPass = group.get('confirm_password')?.value
    return pass === confirmPass ? null : { notSame: true }
  }
  registration=new FormGroup({
    fullname:new FormControl('',[
      Validators.required
    ]),
    username:new FormControl('',[
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
    ])
    
  },{validators:this.checkPasswords})

  otpForm=new FormGroup({
    otp:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
  })

  get department(){
    return this.registration.get('department')

  }
  get fullname(){
    return this.registration.get('fullname')

  }
  get username(){
    return this.registration.get('username')

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
  register(){
    console.log(this.registration.value)
  }
}
