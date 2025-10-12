import { Component, inject, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../../../../core/services/category-service.service';
import { CategoryInterface } from '../../../../../core/models/category-interface.interface';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule],


templateUrl: './main-slider.html',
  styleUrl: './main-slider.css'
})
export class MainSlider {
 
   customOptions: OwlOptions = {
 
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
     autoplay: true,            // تفعيل التشغيل التلقائي
  autoplayTimeout: 2000,
   loop:true,
   dots:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
    },
    nav: false
  }

}
