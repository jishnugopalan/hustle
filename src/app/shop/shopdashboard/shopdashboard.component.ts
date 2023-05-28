import { TokenserviceService } from './../../services/tokenservice.service';
import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-shopdashboard',
  templateUrl: './shopdashboard.component.html',
  styleUrls: ['./shopdashboard.component.css']
})
export class ShopdashboardComponent {
isAccept=false;
  constructor(private productservice:ProductserviceService,private tokenservice:TokenserviceService){}
  ngOnInit() {
    console.log("inn")
    this.productservice.getShopId(this.tokenservice.getUser()._id).subscribe((res:any)=>{
      console.log(res)

      if(res.admin_status=="Accept"){
        this.isAccept=true
      }

    })
  }
}
