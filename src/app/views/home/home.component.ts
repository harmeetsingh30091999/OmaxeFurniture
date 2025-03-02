import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/models/products.model';
import { productservice } from 'src/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  token:any=undefined;
  product : Products[]=[];
  secondproduct : Products[]=[];
  thirdproduct : Products[]=[];
  image_path:string = "http://localhost:8486/images1/";
  title1:object={};
  title2:object={};
  title3:object={};
  product_category:string[]=[];
  name='Home'
  constructor(private service: productservice,private route:Router){};

  ngOnInit(){
    this.token = localStorage.getItem('jwt');
    if(this.token===null || this.token==''){
      this.route.navigate(['Registeration']);     
      return;
    }
    this.getApis();
    setTimeout(() => {
      this.title1={title:"trending this week",id:1, background:"background:rgba(220, 205, 178,0.74)",category:this.product[0].product_category};
      this.title2={title:"New Collections ",id:2, background:"background:rgba(220,205,178,0.15)",category:this.secondproduct[0].product_category};
      this.title3={title:"Table Set",id:2, background:"background:rgba(220, 205, 178,0.74)",category:this.thirdproduct[0].product_category};    
    }, 1000);
  }

  getApis(){
    // First request
       this.service.getFirstCategory().subscribe((res)=>{
        let product : any; 
        product = res;
          for(let i=0;i<product.length;i++){
            this.product[i] = product[i];
            this.product[i].product_img = this.image_path+this.product[i].product_img;
          }
          // console.log(this.product);
        },(err)=>{
          // console.log('Token Expired');
          this.route.navigate(['/Registeration']);
        });
    
    // Second request
        this.service.getSecondCategory().subscribe((res)=>{
          let product:any;
          product = res;
          for(let i=0;i<product.length;i++){
            this.secondproduct[i] = product[i];
            this.secondproduct[i].product_img = this.image_path+this.secondproduct[i].product_img;
          }
          // console.log(this.secondproduct);
        },(err)=>{
          // console.log('Token Expired');
          this.route.navigate(['/Registeration']);
        })
    
    // Third request
        this.service.getThirdCategory().subscribe((res)=>{
          let product:any;
          product = res;
          for(let i=0;i<product.length;i++){
            this.thirdproduct[i] = product[i];
            this.thirdproduct[i].product_img = this.image_path+this.thirdproduct[i].product_img;
          }
          // console.log(this.thirdproduct);
        },(err)=>{
          // console.log('Token Expired');
          this.route.navigate(['/Registeration']);
        })
        // this.product_category[0] = this.product[0].product_category;
        // this.product_category[1] = this.secondproduct[0].product_category;
        // this.product_category[2] = this.thirdproduct[0].product_category;
      }
}