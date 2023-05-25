import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-shop-nav',
  templateUrl: './shop-nav.component.html',
  styleUrls: ['./shop-nav.component.css']
})
export class ShopNavComponent {

  constructor(private tokenstorage:TokenserviceService,private router:Router){}
  logout(){
    this.tokenstorage.signOut();
    this.router.navigateByUrl("/")
  }
}
