import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursel',
  templateUrl: './coursel.component.html',
  styleUrls: ['./coursel.component.scss']
})
export class CourselComponent implements OnInit{
  showCarousel = true;
  constructor(){
  }
  slides?:string[]=[];

  ngOnInit(): void {
  }

   public images = [
       {title: 'First Slide', short: 'First Slide Short', src: "assets/images/Dinning.jpg", caursel:""},
       {title: 'Second Slide', short: 'First Slide Short', src: "assets/images/Sofa.jpg" , caursel:"" },
       {title: 'Third Slide', short: 'First Slide Short', src: "assets/images/Sofa2.jpg", caursel:"" },
       {title: 'Fourth Slide', short: 'First Slide Short', src: "assets/images/Sofa3.jpg", caursel:"" },
       {title: 'Fifth Slide', short: 'First Slide Short', src: "assets/images/Sofa4.jpg", caursel:"" }
     ];
  }