import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductsServices } from '../../../../../core/services/products-services';

import { ProductInterface } from '../../../../../core/models/product-interface';

import { ProductCard } from '../../components/product-card/product-card';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartServices } from '../../../cart/services/cart-services';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../../../../../shared/pipes/search-pipe';

@Component({
  selector: 'app-products',
  imports: [ProductCard, NgxPaginationModule,SearchPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  pageSize!: number;
  p!: number;
  total!: number;
  @Input() productHome: ProductInterface = {} as ProductInterface;
  productList: ProductInterface[] | null = null;
  constructor(private readonly product: ProductsServices) {}
  private readonly toster=inject(ToastrService)
  ngOnInit(): void {
    this.getProductsData();
  }
  getProductsData(page: number = 1): void {
    this.product.getALLProduct(page).subscribe({
      next: (res) => {
        this.productList = res.data;
        this.pageSize = res.metadata.limit;
        this.p=res.metadata.currentPage;
        this.total=res.results;
        console.log(res.data);
      },
      error(err) {
        console.log(err);
      },
    });
  }
  private readonly cartServices=inject(CartServices)
addtoCart(id:string){
  this.cartServices.addToCart(id).subscribe({
     next:(res)=>{
       console.log(res);
       if(res.status=='success'){
        this.toster.success(res.message,"",{
          timeOut:800,
          
        })
       }
       
     }
  })
}
}
