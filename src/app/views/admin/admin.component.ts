import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  username:string="";
  password:string="";
  msg:string="";
  msg1:string="";
  isExpanded:boolean=false;
  
  constructor(private adminservice:AdminService,private route:Router){}

  checkvalid(){
    if(this.username=="admin"){
      if(this.password!=""){
      const body = {'email': this.username,'password': this.password};
      this.adminservice.Login(body).subscribe(res=>{
        if(res!=null){
          localStorage.setItem('jwt',res['token']);
          this.route.navigate(['/admin/home']);
        }
        else{
          this.msg1 = 'Invalid Credentials';
        }
      })
    }
  }
  }

}
