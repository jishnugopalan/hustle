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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent]
