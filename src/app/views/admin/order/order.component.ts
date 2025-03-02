import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/models/products.model';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  public orders:Orders[]=[];
  img_url:string="http://localhost:8486/images1/";
  pageNumber:number=0;
  constructor(private adminservice:AdminService,private route:Router){}

  ngOnInit(): void {
    let token = localStorage.getItem('jwt');
    if(token==null){
      this.route.navigate(['/admin']);
    }
    this.getOrders();
  }

  getOrders(){
    this.orders=[];
    this.adminservice.getAllOrders(this.pageNumber).subscribe(res=>{
      for(let i=0;i<res.length;i++){
        this.orders[i] = res[i];
        this.orders[i].product_img= this.img_url+this.orders[i].product_img;
      }
    })
  }

  nextPage(){
    this.pageNumber++;
    this.getOrders();
  }
  prevPage(){
    if(this.pageNumber==0){
      this.pageNumber=0;
      return;
    }
    this.pageNumber--;
    this.getOrders();
  }
}
