import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInquiry } from 'src/services/productInquiry.service';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavbarComponent {

  @Input('product_id') product_id:any;
  isconfirm:boolean=false;
  msg:string="";
  confirmMessage:boolean=false;
  isInquirySuccess:any;

  constructor(private inquiry:ProductInquiry){}

  Productinquiry(){
    this.msg='Are you sure you want to inquire?';
    this.isconfirm=true;
  }
  cancelConfirm(){
    this.isconfirm=false;
  }
  confirmInquiry(){
    this.isconfirm=false;
    this.inquiry.postInquiry(this.product_id).subscribe(res=>{
      this.isInquirySuccess=res;
      if(this.isInquirySuccess){
        this.msg="Inquiry Confirmed";
      }
      else{
        this.msg="Already Inquired Check Your Orders";
      }
    })
    this.confirmMessage=true;
    setTimeout(()=>{
      this.confirmMessage=false;
    },2000);
  }
}
