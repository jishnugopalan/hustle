import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ShopregistrationComponent } from './shopregistration/shopregistration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CustomerdashboardComponent } from './customer/customerdashboard/customerdashboard.component';
import { ShopdashboardComponent } from './shop/shopdashboard/shopdashboard.component';
import { ShopNavComponent } from './shop/shop-nav/shop-nav.component';
import { CustomerNavComponent } from './customer/customer-nav/customer-nav.component';
import { AddproductComponent } from './shop/addproduct/addproduct.component';
import { MyproductsComponent } from './shop/myproducts/myproducts.component';
import { DataTablesModule } from 'angular-datatables';
import { ViewmyproductComponent } from './shop/viewmyproduct/viewmyproduct.component';
import { ViewproductComponent } from './customer/viewproduct/viewproduct.component';
import { OrderComponent } from './customer/order/order.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { MyordersComponent } from './customer/myorders/myorders.component';
import { ShopordersComponent } from './shop/shoporders/shoporders.component';
import { ViewshoporderComponent } from './shop/viewshoporder/viewshoporder.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { ApproveComponent } from './admin/approve/approve.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { AddsubcategoryComponent } from './admin/addsubcategory/addsubcategory.component';
import { AddshipperComponent } from './admin/addshipper/addshipper.component';
import { ShipperdashComponent } from './shipper/shipperdash/shipperdash.component';
import { ShipperNavComponent } from './shipper/shipper-nav/shipper-nav.component';
import { SetorderComponent } from './shipper/setorder/setorder.component';
import { UpdateorderComponent } from './shipper/updateorder/updateorder.component';
import { ViewpickedComponent } from './shipper/viewpicked/viewpicked.component';
import { TrackorderComponent } from './customer/trackorder/trackorder.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { CustomerprofileComponent } from './customer/customerprofile/customerprofile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegistrationComponent,
    AboutComponent,
    HomeNavComponent,
    FooterComponent,
    ContactComponent,
    ShopregistrationComponent,
    LoginComponent,
    CustomerdashboardComponent,
    ShopdashboardComponent,
    ShopNavComponent,
    CustomerNavComponent,
    AddproductComponent,
    MyproductsComponent,
    ViewmyproductComponent,
    ViewproductComponent,
    OrderComponent,
    PaymentComponent,
    MyordersComponent,
    ShopordersComponent,
    ViewshoporderComponent,
    AdmindashComponent,
    AdminNavComponent,
    ApproveComponent,
    AddcategoryComponent,
    AddsubcategoryComponent,
    AddshipperComponent,
    ShipperdashComponent,
    ShipperNavComponent,
    SetorderComponent,
    UpdateorderComponent,
    ViewpickedComponent,
    TrackorderComponent,
    ProfileupdateComponent,
    CustomerprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
