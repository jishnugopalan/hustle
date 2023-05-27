import { Component } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent {
  shops:any
constructor(private adminservice:AdminserviceService){}
approve(shopid:any){
this.adminservice.updateShopStatus(shopid,"Accept").subscribe((res:any)=>{
  console.log(res)
  alert("Shop approved successfully")
  this.ngOnInit()
})
}
reject(shopid:any){
  this.adminservice.updateShopStatus(shopid,"Reject").subscribe((res:any)=>{
    console.log(res)
    alert("Shop rejected successfully")
    this.ngOnInit()
  })
}
ngOnInit() {
  this.adminservice.getAllShop().subscribe((res:any)=>{
console.log(res)
this.shops=res
  })
}
}
