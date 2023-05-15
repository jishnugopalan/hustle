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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
