import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productservice } from 'src/services/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email:string=""
  password:string="";
  msg:string="";
  msg1:string="";
  constructor(private service:productservice,private route:Router){};

  ngOnInit(){

  }

  checkvalid(){
    let length = this.email.length;
    let email=this.email.substring(length-3);
    if(email=='com' && this.password!=""){
      this.msg=""
      this.form_submit();
    }
    else{
        this.msg="Invalid Email or Password";
    }
  }

  form_submit(){
    // let body = new FormData();
    const body = {'email': this.email,'password':this.password};
    this.service.loginFormdata(body).subscribe(res=>{
      if(res!=null){
        localStorage.setItem('jwt',res['token']);
        this.route.navigate(['/home']);
      }
      else{
        this.msg1='User is already logged in from different device';
      }
    })
  }
  

}
