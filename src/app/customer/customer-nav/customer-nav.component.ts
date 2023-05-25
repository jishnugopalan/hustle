import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent {
  constructor(private tokenstorage:TokenserviceService,private router:Router){}
  logout(){
    this.tokenstorage.signOut();
    this.router.navigateByUrl("/")
  }
}
