import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-shipper-nav',
  templateUrl: './shipper-nav.component.html',
  styleUrls: ['./shipper-nav.component.css']
})
export class ShipperNavComponent {
  constructor(private tokenstorage:TokenserviceService,private router:Router){}
  logout(){
    this.tokenstorage.signOut();
    this.router.navigateByUrl("/")
  }
}
