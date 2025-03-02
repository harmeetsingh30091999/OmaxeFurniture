import { Component, Input, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit{

  @Input() productimages:any;

  @Input('trend') trend:any;
  background:string='';
  count=0;

  getbackgroundColor(){
    if(this.count===0){
      this.background='rgba(0,0,0,0.5)';
    }
    else{
      this.background='rgba(255,255,0,0.5)';
      this.count=0;
    }
    return this.background;
  }
  constructor(){
    
  }

  ngOnInit(): void {
    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    slideBy:1,
    navSpeed: 500,

    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

}

