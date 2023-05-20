import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UtilityServicesService } from '../services/utility-services.service';

@Component({
  selector: 'app-shopregistration',
  templateUrl: './shopregistration.component.html',
  styleUrls: ['./shopregistration.component.css']
})
export class ShopregistrationComponent {
  registration!: FormGroup;
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value
    let confirmPass = group.get('confirm_password')?.value
    return pass === confirmPass ? null : { notSame: true }
  }
  city:any



  constructor(private formBuilder: FormBuilder,private service:UtilityServicesService) {}

  get fullname(){
    return this.registration.get('fullname')
  }
  get email(){
    return this.registration.get("email")
  }
  get phone(){
    return this.registration.get("phone");
  }
  get password(){
    return this.registration.get("password");
  }
  get confirm_password(){
    return this.registration.get("confirm_password"); 
  }
  get owner_housename(){
    return this.registration.get("owner_housename");
  }
  get owner_street(){
    return this.registration.get("owner_street")
  }
  get owner_city(){
    return this.registration.get("owner_city")
  }
  get owner_district(){
    return this.registration.get("owner_district")
  }
  get owner_pincode(){
    return this.registration.get("owner_pincode")
  }
  get owner_adhaar(){
    return this.registration.get("owner_adhaar")
  }
  get shop_street(){
    return this.registration.get("shop_street")
  }
  get shop_city(){
    return this.registration.get("shop_city")
  }
  get shop_district(){
    return this.registration.get("shop_district")
  }
  get shop_pincode(){
    return this.registration.get("shop_pincode")
  }
  get shop_phone(){
    return this.registration.get("shop_phone")
  }
  get shop_email(){
    return this.registration.get("shop_email")
  }
  get shop_license(){
    return this.registration.get("shop_license")
  }
  get security_question(){
    return this.registration.get("security_question")
  }
  get security_answer(){
    return this.registration.get("security_answer")
  }

  register(){
    console.log(this.registration.value)
  }


  ngOnInit() {
    this.service.getCity().subscribe((res:any)=>{
      console.log(res)
      this.city=res.data
    })
    this.registration=this.formBuilder.group({
      fullname:new FormControl('',[
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
      owner_housename:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      owner_street:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      owner_city:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      owner_district:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      owner_pincode:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      owner_adhaar:new FormControl('',[
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
      ]),
      shop_street:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      shop_city:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      shop_district:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      shop_pincode:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      shop_phone:new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      shop_email:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
      ]),
      shop_license:new FormControl('',[
        Validators.required,
      ]),  
      security_question:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
      
      ]),
      security_answer:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
      
      ])

    },{validators:this.checkPasswords})
  }

}
