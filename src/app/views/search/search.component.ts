import { Component, OnInit } from '@angular/core';
import { Products } from 'src/models/products.model';
import { productservice } from 'src/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  product:any=[];
  email:string="";
  products:Products[] =[];
  img_url:string="http://localhost:8486/images1/";
  constructor(private service:productservice){};

  ngOnInit():void{
    this.searchresult('');
  }
  searchresult(search:string){
    this.service.getSearchProducts('').subscribe(res=>{
      this.products=res;
      for(let i=0;i<this.products.length;i++){
        this.products[i].product_img = this.img_url+this.products[i].product_img;
      }
    })
  }
  onChanges(event:any){
    this.email = event.target.value;
    this.searchApiCall(this.email);
  }

  searchApiCall(search:string){
    this.service.getSearchProducts(search).subscribe(res=>{
      this.products=res;
      for(let i=0;i<this.products.length;i++){
        this.products[i].product_img = this.img_url+this.products[i].product_img;
      }
    })
  }

}
