import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopregistrationComponent } from './shopregistration/shopregistration.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent]
