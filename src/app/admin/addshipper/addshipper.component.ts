import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-addshipper',
  templateUrl: './addshipper.component.html',
  styleUrls: ['./addshipper.component.css']
})
export class AddshipperComponent {

  userForm: any;

  constructor(private formBuilder: FormBuilder,private adminservice:AdminserviceService) {
    this.createForm();
    
  }
  onSubmit(){
    console.log(this.userForm.value)
    let s1=this.userForm.value.name
    let s2=this.userForm.value.phone
    this.userForm.value.password=s1[0]+s1[1]+s1[2]+s2[0]+s2[1]+s2[2]
    this.userForm.value.security_question="12345678"
    this.userForm.value.security_answer="12345678"
    this.userForm.value.usertype="shipper"
    console.log(this.userForm.value)
    this.adminservice.addShipper(this.userForm.value).subscribe((res:any)=>{
      console.log(res)
      alert("Delivery partner added successfully")
    })
  }
  createForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      housename: ['', Validators.required],
      street: ['', Validators.required],
      district: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern("^[1-9][0-9]{5}$")]],
      adhaar: ['', [Validators.required]],
      work_location: ['', Validators.required],
      password:new FormControl(),
      security_question:new FormControl(),
      security_answer:new FormControl(),
      usertype:new FormControl(),
    });
  }
}
