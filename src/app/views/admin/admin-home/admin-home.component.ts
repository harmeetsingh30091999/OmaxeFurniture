import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit{
  showFiller = false;
  isExpanded:boolean =false;

  constructor(private adminService:AdminService,private route:Router){}

  ngOnInit(){
    let token = localStorage.getItem('jwt');
    if(token==null){
      this.route.navigate(['/admin']);
    }
      this.adminService.home().subscribe(res=>{ 
        console.log(res);     
      })
  }
}
