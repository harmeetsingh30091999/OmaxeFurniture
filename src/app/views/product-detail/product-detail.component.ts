import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productDetails } from 'src/models/products.model';
import { productservice } from 'src/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  product_id:any=0;
  name="Description";
  token:any;
  product?:productDetails =undefined;
  size:number=0;
  savingsOnproduct:number=0; 
  product_coursel:any;
  imgUrl:string="http://localhost:8486/images1/"
  constructor(private route:ActivatedRoute,private router:Router,private productService:productservice){
    this.product_id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit():void{
    this.token = localStorage.getItem('jwt');
    if(this.token===null || this.token==''){
      this.router.navigate(['Registeration']);     
      return;
    } 
    this.getProductDetails(this.product_id);
  }

  getProductDetails(product_id:any){
    this.productService.getSpecificProductDetails(product_id).subscribe(res=>{
      this.product = res;
      this.size = Number(this.product?.product_img.length);
      this.product_coursel = res.product_img;
      this.savingsOnproduct = Number(this.product?.product_price)-Number(this.product?.product_discounted_price);
      // console.log(this.product);
      for(let i=0;i<this.product_coursel.length;i++){
        this.product_coursel[i] = this.imgUrl + this.product_coursel[i];
      }
    })
    // console.log(this.product);
  }

  showCarousel = true;

  generateInquiry(){

  }

}
