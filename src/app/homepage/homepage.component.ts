import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';
import { TokenserviceService } from '../services/tokenservice.service';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private service:AuthserviceService,private tokenStorage: TokenserviceService,private productservice:ProductserviceService){}
 products:any
  msg=""
  alert=false
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  loginform=new FormGroup({
    email:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password:new FormControl('',Validators.required),
  })
  get email(){
    return this.loginform.get('email');
  }
  get password(){
    return this.loginform.get('password');
  }
  login(){
    console.log(this.loginform.value)
    this.service.login(this.loginform.value).subscribe((res:any)=>{
      console.log(res)
      this.tokenStorage.saveToken(res.token);
      this.tokenStorage.saveUser(res.user);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
    },error=>{
      console.log(error)
      
        if(error.error==null){
          this.alert=true
          this.msg="Incorrect password"

        }
        else{
          this.alert=true
          this.msg=error.error.msg
        }

    })
  }
  reloadPage(): void {
    window.location.reload();
  }
  ngOnInit(): void {
    this.productservice.getAllProduct().subscribe((res:any)=>{
      console.log(res)
      this.products=res
    })

    if (this.tokenStorage.getToken()) {
      console.log("in")
      const user = this.tokenStorage.getUser();
      console.log(user)
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().usertype;
      console.log(this.roles)
    }
    else{
      console.log("no user")
    }
  }


}
