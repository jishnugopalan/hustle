import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  products = [
    {
      name: 'Product 1',
      description: 'This is a description of Product 1',
      price: 19.99,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Product 2',
      description: 'This is a description of Product 2',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/150'
    },
    // Add more products here
  ];
  msg=""
  alert=false
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  loginform=new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password:new FormControl('',Validators.required),
  })
  get username(){
    return this.loginform.get('username');
  }
  get password(){
    return this.loginform.get('password');
  }
  login(){
    console.log(this.loginform.value)
  }

}
