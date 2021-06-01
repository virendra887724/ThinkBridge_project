import {NgModule}  from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import {LoginComponent} from '../login/login.component';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {AddProductComponent} from '../add-product/add-product.component';

const routes: Routes = [
  { path: 'allProduct', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'addProduct', component: AddProductComponent },
  {path : '', component : LoginComponent},
  {path : '**', redirectTo : ''},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }