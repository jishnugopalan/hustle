import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  constructor(private tokenstorage:TokenserviceService,private router:Router){}
  logout(){
    this.tokenstorage.signOut();
    this.router.navigateByUrl("/")
  }

}
