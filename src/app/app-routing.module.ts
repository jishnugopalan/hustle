import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopregistrationComponent } from './shopregistration/shopregistration.component';
import { LoginComponent } from './login/login.component';
import { ShopdashboardComponent } from './shop/shopdashboard/shopdashboard.component';
import { CustomerdashboardComponent } from './customer/customerdashboard/customerdashboard.component';
import { AddproductComponent } from './shop/addproduct/addproduct.component';
import { MyproductsComponent } from './shop/myproducts/myproducts.component';
import { ViewmyproductComponent } from './shop/viewmyproduct/viewmyproduct.component';
import { ViewproductComponent } from './customer/viewproduct/viewproduct.component';
import { OrderComponent } from './customer/order/order.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { MyordersComponent } from './customer/myorders/myorders.component';
import { ShopordersComponent } from './shop/shoporders/shoporders.component';
import { ViewshoporderComponent } from './shop/viewshoporder/viewshoporder.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { AddshipperComponent } from './admin/addshipper/addshipper.component';
import { ApproveComponent } from './admin/approve/approve.component';
import { AddsubcategoryComponent } from './admin/addsubcategory/addsubcategory.component';
import { ShipperdashComponent } from './shipper/shipperdash/shipperdash.component';
import { SetorderComponent } from './shipper/setorder/setorder.component';
import { UpdateorderComponent } from './shipper/updateorder/updateorder.component';
import { ViewpickedComponent } from './shipper/viewpicked/viewpicked.component';
import { TrackorderComponent } from './customer/trackorder/trackorder.component';
import { CustomerprofileComponent } from './customer/customerprofile/customerprofile.component';
import { ShipperprofileComponent } from './shipper/shipperprofile/shipperprofile.component';
import { ShopprofileComponent } from './shop/shopprofile/shopprofile.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {
    path:"registration",component:RegistrationComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"shopregistration",component:ShopregistrationComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"customerdash",component:CustomerdashboardComponent
  },
  {
    path:"shopdash",component:ShopdashboardComponent
  },
  {
    path:"addproduct",component:AddproductComponent
  },
  {
    path:"myproducts",component:MyproductsComponent
  },
  {
    path:"viewmyproduct/:productid",component:ViewmyproductComponent
  },
  {
    path:"viewproduct/:productid",component:ViewproductComponent
  },
  {
    path:"order/:productid/:qty/:orgprice",component:OrderComponent
  },
  {
    path:"payment",component:PaymentComponent
  },
  {
    path:"myorders",component:MyordersComponent
  },

  {
    path:"shoporders",component:ShopordersComponent
  },
  {
    path:"viewshoporder/:orderid",component:ViewshoporderComponent
  },
  {
    path:"admindash",component:AdmindashComponent
  },
  {
    path:"addcategory",component:AddcategoryComponent
  },
  {
    path:"addsubcategory",component:AddsubcategoryComponent
  },
  {
    path:"addshipper",component:AddshipperComponent
  },
  {
    path:"approve",component:ApproveComponent
  },
  {
    path:"shipperdash",component:ShipperdashComponent
  },
  {
    path:"setorder/:orderid",component:SetorderComponent
  },
  {
    path:"updateorder",component:UpdateorderComponent
  },
  {
    path:"pickedorder/:id",component:ViewpickedComponent
  },

  {
    path:"trackorderbycustomer/:id",component:TrackorderComponent
  },

  {
    path:"customerprofile",component:CustomerprofileComponent
  },
  {
    path:"shipperprofile",component:ShipperprofileComponent
  },
  {
    path:"shopprofile",component:ShopprofileComponent
  },
  {
    path:"adminprofile",component:AdminprofileComponent
  },

  {
    path:"forgotpassword",component:ForgotpasswordComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent]
