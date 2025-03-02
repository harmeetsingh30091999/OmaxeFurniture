import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/models/products.model';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit {
  
  public users:Users[]=[];
  
  constructor(private adminService:AdminService,private route:Router){}

  ngOnInit(): void {
    let token = localStorage.getItem('jwt');
    if(token==null){
      this.route.navigate(['/admin']);
    }
    this.allUsers();
  }
  allUsers(){
    this.users = [];
    this.adminService.getAllUsers().subscribe(res=>{
      for(let i=0;i<res.length;i++){
        this.users[i] = res[i];
      }
    })
  }
    MakeInactive(userid:number){
        this.adminService.AccountInactive(userid).subscribe(res=>{
          setTimeout(()=>{
            this.allUsers();
          },500)
        })
    }
}
