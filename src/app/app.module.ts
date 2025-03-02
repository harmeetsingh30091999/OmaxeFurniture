import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TopNavbarComponent } from './bars/top-navbar/top-navbar.component';
import { CourselComponent } from './coursel/coursel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './views/products/product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';
import { RegisterationComponent } from './views/registeration/registeration.component';
import { OtpComponent } from './views/otp/otp.component';
import { LoginheaderComponent } from './views/loginheader/loginheader.component';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION,PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ProductCategoryComponent } from './views/product-category/product-category.component';
import { SearchComponent } from './views/search/search.component';
import { MyordersComponent } from './views/myorders/myorders.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminHomeComponent } from './views/admin/admin-home/admin-home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { OrderComponent } from './views/admin/order/order.component';
import { SidenavComponent } from './views/admin/sidenav/sidenav.component';
import { AddproductComponent } from './views/admin/addproduct/addproduct.component';
import { AllproductsComponent } from './views/admin/allproducts/allproducts.component';
import { AllusersComponent } from './views/admin/allusers/allusers.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'rgba(12,80,219,0.98)',
  bgsOpacity: 1,
  bgsPosition: POSITION.bottomRight,
  bgsSize: 40,
  bgsType: SPINNER.threeStrings,
  fgsColor: 'rgba(12,80,219,0.98)',
  fgsPosition: POSITION.centerCenter,
  logoUrl: "assets/images/bhutaniLogo.png",
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavbarComponent,
    CourselComponent,
    ProductCarouselComponent,
    ProductComponent,
    RegisterationComponent,
    OtpComponent,
    LoginheaderComponent,
    ProductDetailComponent,
    BottomNavbarComponent,
    ProductCategoryComponent,
    SearchComponent,
    MyordersComponent,
    LoginComponent,
    AdminComponent,
    AdminHomeComponent,
    OrderComponent,
    SidenavComponent,
    AddproductComponent,
    AllproductsComponent,
    AllusersComponent,
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    InfiniteScrollModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    CarouselModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
