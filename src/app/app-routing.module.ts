import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/products/product/product.component';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './views/registeration/registeration.component';
import { OtpComponent } from './views/otp/otp.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ProductCategoryComponent } from './views/product-category/product-category.component';
import { SearchComponent } from './views/search/search.component';
import { MyordersComponent } from './views/myorders/myorders.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminHomeComponent } from './views/admin/admin-home/admin-home.component';
import { OrderComponent } from './views/admin/order/order.component';
import { AddproductComponent } from './views/admin/addproduct/addproduct.component';
import { AllproductsComponent } from './views/admin/allproducts/allproducts.component';
import { AllusersComponent } from './views/admin/allusers/allusers.component';

const routes: Routes = [ 
{
  path: 'home',
  component:HomeComponent  
},
{
  path: 'Products/:id',
  component:ProductComponent
},
{
  path: 'Product/detail/:id',
  component:ProductDetailComponent
},
{
  path: '', redirectTo:'home',pathMatch:'full'
},
{
  path: 'Registeration',
  component: RegisterationComponent
},
{
  path: 'Otp',
  component: OtpComponent
},
{
  path: 'ProductCategory',
  component: ProductCategoryComponent
},
{
  path: 'SearchProducts',
  component:SearchComponent
},
{
  path: 'MyOrders',
  component:MyordersComponent
},
{
  path: 'Login',
  component:LoginComponent
},
{
  path: 'admin',
  component:AdminComponent
},
{
  path: 'admin/home',
  component:AdminHomeComponent
},
{
  path: 'admin/addproduct',
  component:AddproductComponent
},
{
  path: 'admin/allproduct',
  component:AllproductsComponent
},
{
  path: 'admin/order',
  component:OrderComponent
},
{
  path: 'admin/allusers',
  component:AllusersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
