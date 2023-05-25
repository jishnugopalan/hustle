import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from './services/tokenservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniproject';
  isuser:boolean=false
  isshop:boolean=false
  isadmin:boolean=false
  roles="";
  isLoggedIn = false;
  

  username="";
  constructor(private tokenservice:TokenserviceService,private router:Router){}

  ngOnInit() {
    this.isLoggedIn = !!this.tokenservice.getToken();
    console.log("Is loggedin",this.isLoggedIn)
    if (this.isLoggedIn) {
      const user = this.tokenservice.getUser();
      this.roles = user.usertype;
      console.log("Role",this.roles)
      if(this.roles=="customer"){
        this.isuser=true
        this.isadmin=false
        this.isshop=false
        this.router.navigateByUrl("/customerdash")
      }
      else if(this.roles=="shop"){

        this.isuser=false
        this.isadmin=false
        this.isshop=true
        this.router.navigateByUrl("/shopdash")
      }
      else if(this.roles=="admin"){
        this.isuser=false
        this.isadmin=true
        this.isshop=false
      }
    }
  }
  logout(): void {

    this.isuser=false
    this.isadmin=false
    this.isshop=false
   
    this.tokenservice.signOut();
    this.router.navigateByUrl("/")
  }
}
