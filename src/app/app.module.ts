import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
