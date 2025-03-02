import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MyInquiry } from 'src/models/products.model';
import { ProductInquiry } from 'src/services/productInquiry.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit{

  public orders:MyInquiry[]=[];

  public img_url:string="http://localhost:8486/images1/";

  count:number=0;

  constructor(private inquiry:ProductInquiry){}

  ngOnInit(){
    console.log("working fine");
    this.loadMyorders();
  }

  loadMyorders(){
    this.inquiry.getMyInquiry().subscribe(res=>{
      for(let i=0;i<res.length;i++){
        this.orders[i] = res[i];
        this.orders[i].product_img = this.img_url+this.orders[i].product_img;
      }
    })
  }

}
