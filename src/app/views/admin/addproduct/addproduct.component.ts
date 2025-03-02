import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit{

  product_name:string="";
  product_description:string="";
  product_category:string="";
  product_price:string="";
  product_discount:string="";
  product_feature1:string="";
  product_feature2:string="";
  product_feature3:string="";
  product_feature4:string="";
  msg:string="";
  image:File[]=[];
  image1:any[]=[];
  formdata:any;

  constructor(private adminservice:AdminService,private route:Router,private preloader:NgxUiLoaderService){};
  ngOnInit(){
    let token = localStorage.getItem('jwt');
    if(token==null){
      this.route.navigate(['/admin']);
    }
  }

  detectFiles(event:any) {
    this.image1 = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.image1.push(e.target.result);
        }
        this.image.push(file);
        reader.readAsDataURL(file);
      }
    }
    // console.log(this.image);
  }

  checkvalid(){
    if(this.product_category==""){
      this.msg="Category cannot be empty";
      return;
    }
    if(this.product_name==""){
      this.msg="Please provide product name";
      return;
    }
    if(this.product_discount==""){
      this.msg="Please provide discounted price";
      return;
    }
    if(this.product_price==""){
      this.msg="Please provide actual price";
      return;
    }
    this.addProduct();
  }

  addProduct(){
    // console.log(this.image);
    this.preloader.start();
  const formData = new FormData();
  formData.append('product_name', this.product_name);
  formData.append('product_category', this.product_category);
  formData.append('product_description', this.product_description);
  formData.append('product_discount', this.product_discount);
  formData.append('product_price', this.product_price);
  for(let i=0;i<this.image.length;i++){
    formData.append('image', this.image[i]);
  }
   this.adminservice.AddProduct(formData).subscribe((res)=>{
      console.log(res);
      this.msg = res;
      this.preloader.stop();
   })
  }
}
