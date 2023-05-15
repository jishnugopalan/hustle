import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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


  ngOnInit() {
    this.registration=new FormGroup({
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
      shop_district:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      shop_pincode:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      shop_license:new FormControl('',[
        Validators.required,
      ]),
  
      
      
    },{validators:this.checkPasswords})
  }

}
