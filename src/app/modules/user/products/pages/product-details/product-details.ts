import { Component, inject } from '@angular/core';
import { ProductsServices } from '../../../../../core/services/products-services';
import { ProductInterface } from '../../../../../core/models/product-interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  standalone: true, // لو بتستخدمي standalone
  imports: [RouterLink, CarouselModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
[x: string]: any;
  
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
  productDetails: ProductInterface | null = null;

  private readonly activateRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductsServices);

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id'); // هات الـ id من الرابط
        if (id) {
          this.getProductDetailsData(id);
        }
      },
      error: (err) => console.error('Error in route params:', err),
    });
  }

  getProductDetailsData(id: string) {
    this.productService.getSpecifcProduct(id).subscribe({
      next: (res) => {
        this.productDetails = res.data;
        console.log('Product data:', res.data);
      },
      error: (err) => console.error('Error fetching product details:', err),
    });
  }
}
