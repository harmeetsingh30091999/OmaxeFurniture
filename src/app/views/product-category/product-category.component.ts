import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Products } from 'src/models/products.model';
import { productservice } from 'src/services/products.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit{
  name:string='Category';
  products:any={};
  products2:any={};
  Product:Products[]=[];
  ProductCarousel:Products[] =[];
  img_url:string='http://localhost:8486/images1/';
  constructor(private service:productservice,private route:Router){}
  title1: Object={};
  token:any=undefined;
  ngOnInit():void{
    this.token = localStorage.getItem('jwt');
    if(this.token===null || this.token==''){
      this.route.navigate(['Registeration']);     
      return;
    }
    this.getAllCategory();
    this.getProductCarousel();
    setTimeout(() => {
      this.title1={title:"trending this week",id:1, background:"background:rgba(220, 205, 178,0.74)", category:this.ProductCarousel[0].product_category};
    },700)
  }

  getAllCategory(){
    this.service.getAllCategory().subscribe(res=>{
      this.products = res;
      this.Product = this.products
      for(let i=0;i<this.Product.length;i++){
        this.Product[i].product_img = this.img_url+this.Product[i].product_img;
      }
    })
  }

  getProductCarousel(){
    this.service.getFirstCategory().subscribe((res)=>{
      this.products2 = res;
      this.ProductCarousel = this.products2;
        for(let i=0;i<this.ProductCarousel.length;i++){
          this.ProductCarousel[i].product_img = this.img_url+this.ProductCarousel[i].product_img;
        }
    });
  }

}
