import { Component } from '@angular/core';
import { UtilityServicesService } from '../services/utility-services.service';
import { TokenserviceService } from '../services/tokenservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent {
constructor(private utilityservice:UtilityServicesService,private tokenservice:TokenserviceService){}
profile:any
phone:any
id:any
email:any
password:any
newpassword:any
profileForm!: FormGroup;
updatePhone(){
  console.log(this.phone)
if(this.phone==null){
  alert("Please add phone number in a proper format")
}
else{
this.utilityservice.updatePhone(this.id,this.phone).subscribe((res:any)=>{
  console.log(res)
  alert("Phone number updated")
  this.ngOnInit()
})
}
}
updatePassword(){
  if(this.email==null || this.password==null || this.newpassword==null){
    alert("Please add correct fields")
  }
  else{

  }
}
onSubmit() {
  console.log(this.profileForm.value);
 this.utilityservice.updatePassword(this.profileForm.value).subscribe((res:any)=>{
  console.log(res)
  alert("Password Updated")
  this.ngOnInit()
 },error=>{
  alert("Email and password not matching")
 })
}
ngOnInit() {
  this.profileForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required]),
    'newpassword': new FormControl(null, [Validators.required]),
  });
  this.utilityservice.getProfile(this.tokenservice.getUser()._id).subscribe((res:any)=>{
    console.log(res)
    this.profile=res
    this.phone=res.phone
    this.id=res._id
  })
}
}
