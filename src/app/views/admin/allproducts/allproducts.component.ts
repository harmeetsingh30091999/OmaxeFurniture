import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from 'src/models/products.model';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit{

  search:string="";
  // form update variable
  product_name:string="";
  product_price:string="";
  product_discounted:string="";
  // End of form update
  allproducts:Products[]=[];
  updateProduct1?:Products=undefined;
  tempproducts:Products[]=[];
  isDeleting:boolean=false;
  imgUrl:string='http://localhost:8486/images1/';
  pageNumber:number=0;
  productid:number=1;
  isUpdate:boolean =false;
  msg:string='';
  constructor(private adminservice:AdminService,private route:Router){};

  ngOnInit(): void {
    let token = localStorage.getItem('jwt');
    if(token==null){
      this.route.navigate(['/admin']);
      return;
    }
    this.getProducts();
  }

  getProducts(){
    this.allproducts=[];
    this.adminservice.getAllProducts('',this.pageNumber).subscribe(res=>{
      for(let i=0;i<res.length;i++){
        this.allproducts[i] = res[i];
        this.allproducts[i].product_img = this.imgUrl+this.allproducts[i].product_img;
      }
      console.log(this.allproducts);
    })       
  }

   onChanges(event:any){
      this.search = event.target.value;
      this.searchApiCall(this.search);
   }

   searchApiCall(search:string){
    if(this.search!=""){
      this.tempproducts = this.allproducts;
      this.allproducts=[];
    }
    else{
      this.allproducts = this.tempproducts;
    }

      this.adminservice.getAllProducts(search,this.pageNumber).subscribe((res)=>{
        for(let i=0;i<res.length;i++){
          this.allproducts[i] = res[i];
          this.allproducts[i].product_img = this.imgUrl+this.allproducts[i].product_img;
        }
      })
   }

   delete(productid:number){
    this.productid=productid;
    this.isDeleting=true;
    return;
   }

   confirmDelete(){
    this.adminservice.DeleteSpecificProduct(this.productid).subscribe(res=>{
      this.msg = res;
      setTimeout(()=>{
        console.log('calling or not');
        this.getProducts();
      },1000);
    }) 
    this.isDeleting=false;
   }

   updateProduct(product:any){
      this.updateProduct1=product;
      console.log(this.updateProduct1);
      this.isUpdate=true;
   }

   updateForm(){
    let productid = String(this.updateProduct1?.product_id);
    this.isUpdate=false;
    const formData = new FormData();
    if(this.updateProduct1!=undefined){
      formData.append('product_id', productid);
      formData.append('product_name', this.updateProduct1.product_name);
      formData.append('product_category', this.updateProduct1.product_category);
      formData.append('product_description', this.updateProduct1.product_description);
      formData.append('product_discount', this.updateProduct1.product_discounted_price);
      formData.append('product_price', this.updateProduct1.product_price);
    }  
    this.adminservice.updateSpecificProduct(formData).subscribe(res=>{
      console.log(res);
    });
   }

   setupdate(product:any,inputField:string) {
      switch(inputField) { 
        case 'product_name': { 
           //statements; 
          if(this.updateProduct1?.product_name!=undefined){
            this.updateProduct1.product_name = product.target.value;
          }
          break; 
        } 
        case 'product_price': { 
           //statements;
          if(this.updateProduct1?.product_price!=undefined){
            this.updateProduct1.product_price = product.target.value;
          } 
          break; 
        }
        case 'product_description': { 
          //statements;
          if(this.updateProduct1?.product_description!=undefined){
            this.updateProduct1.product_description = product.target.value;
          }  
          break; 
        } 
        case 'product_discount': { 
          //statements;
          if(this.updateProduct1?.product_discounted_price!=undefined){
            this.updateProduct1.product_discounted_price = product.target.value;
          }   
          break; 
        } 
        case 'product_category': { 
          //statements; 
          if(this.updateProduct1?.product_category!=undefined){
            this.updateProduct1.product_category = product.target.value;
          }  
          break; 
        } 
        default: { 
           //statements; 
           break; 
        } 
     } 
   }

   nextPage(){
      this.pageNumber++;
      this.getProducts();
   }
   prevPage(){
    if(this.pageNumber==0){
      this.pageNumber=0;
      return;
    }
    this.pageNumber--;
    this.getProducts();

   }

}
