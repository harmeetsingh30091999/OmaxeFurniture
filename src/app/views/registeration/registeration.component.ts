import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productservice } from 'src/services/products.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent {
  fullname: string="";
  username: string="";
  password: string="";
  gstno:    string="";
  pancard:  string="";
  adharcard:string="";
  email:    string="";
  isRegister: boolean =false;
  message:  string="";
  isComplete: boolean=false;

  constructor(private service:productservice,private route:Router,private preloader:NgxUiLoaderService){};

  onSubmit() {
    let body = new FormData();
    body.append('fullName',this.fullname);
    body.append('username',this.username);
    body.append('password',this.password);
    body.append('gstno',this.gstno);
    body.append('pancard',this.pancard);
    body.append('adharcard',this.adharcard);
    body.append('email',this.email);
    localStorage.setItem('email',this.email);
    console.log("everything is fine till here");
    this.service.registerFormdata(body).subscribe((res: any)=>{
      if(res==true){
        this.navigator();
      }
      else{
        this.message='Invalid Credentials';
      }
      this.preloader.stop();
    });
  }

  navigator(){
    this.route.navigate(['Otp']);
  }

  checkvalid(){
    this.preloader.start();
    if(this.fullname!="" && this.adharcard!="" && this.email!=""){
      console.log(this.email.length);
      let total = this.email.length;
      if(this.email.substring(total-3)=='com'){
        if(this.pancard.length==10){
          if(this.gstno.length==15){
            this.onSubmit();
            this.isComplete=true;
          }
          else{
            this.message="Invalid GST number";
          }
        }
        else{
          this.message="Invalid pancard number";
        }
      }
    }
    else{
      this.message="Field cannot be empty ex-> adharcard,email etc";
    }
    if(this.isComplete!=true){
      this.preloader.stop();
    }
  }

}
