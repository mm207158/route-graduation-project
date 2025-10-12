import { Component, inject } from '@angular/core';
import { CategoryInterface } from '../../../../../core/models/category-interface.interface';
import { CategoryServiceService } from '../../../../../core/services/category-service.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category-slider',
  imports: [CarouselModule],
  templateUrl: './category-slider.html',
  styleUrls: ['./category-slider.css']   // ✅ هنا التعديل
})
export class CategorySlider {
  private readonly categoryService = inject(CategoryServiceService);
  
  catList: CategoryInterface[] | null = null;

  customOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    loop:true,
    dots:false,
    autoplay: true,
    autoplayTimeout: 2000,        // ⏱ أنسب وقت
       // يقف عند hover
  
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 6 }
    },
    nav: false
  }

  ngOnInit(): void {
    this.getCategoryData();
  }

  getCategoryData(): void {
    this.categoryService.getCategory().subscribe({
      next: (res) => {
        this.catList = res.data;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }
}
