import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/models/products.model';
import { productservice } from 'src/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  token:any;

  category:any;

  product:Products[]=[];

  count:number=1;

  currentSize:number=0;

  img="http://localhost:8486/images1/";

  constructor(private route:ActivatedRoute,private service: productservice,private router:Router){
    // console.log("id is",this.route.snapshot.paramMap.get('id'));
    this.category = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit():void{
    this.token = localStorage.getItem('jwt');
    if(this.token===null || this.token==''){
      this.router.navigate(['Registeration']);     
      return;
    } 
    this.getProductapi();
  }
  getProductapi(){
    this.service.getProductBasedonCategory(this.category,1).subscribe(res=>{
      // console.log(res);
      for(let i=0;i<res.length;i++){
         this.product[i] = res[i];
         this.product[i].product_img = this.img+this.product[i].product_img;
         this.currentSize++;
      }
    })
    // console.log(this.product);
  }
  
   // This method is called when scrolling the page 
   appendData=()=>{
    this.count++;
    this.service.getProductBasedonCategory(this.category,this.count).subscribe(res=>{
      // next:response=>this.product = [...this.product,...response]
      for(let i=0;i<res.length;i++){
        this.product[this.currentSize]= res[i];
        this.product[this.currentSize].product_img = this.img+res[i].product_img;
        this.currentSize++;
      }
    })
    // console.log(this.product);
  }
  onscroll=()=>{
    // console.log('calling');
    this.appendData();
  }

}
