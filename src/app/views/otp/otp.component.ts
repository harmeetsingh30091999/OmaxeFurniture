import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { productservice } from 'src/services/products.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {
  constructor(private service:productservice,private route:Router,private preloader:NgxUiLoaderService){};

  otp:any=0;
  response:string="";

  checkvalid(){
    if(this.otp!=0){
      this.preloader.start();
      this.service.validateOtp(this.otp).subscribe(res=>{
        if(res!=null){
          localStorage.setItem('jwt',res['token']);
          this.preloader.stop();
          this.route.navigate(['home']);
        }
        else{
          this.response="Invalid Otp";
        }
        this.preloader.stop();
      });
    }
    else{
      this.response="Invalid Otp";
    }
  }
  
}
