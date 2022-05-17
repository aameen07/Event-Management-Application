import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicepageComponent } from './pages/servicepage/servicepage.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'service/:id',component:ServicepageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
