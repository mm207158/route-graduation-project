import { Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductsServices } from '../../../../../core/services/products-services';
import { ProductInterface } from '../../../../../core/models/product-interface';
import { ProductCard } from '../../components/product-card/product-card';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartServices } from '../../../cart/services/cart-services';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../../../../../shared/pipes/search-pipe';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { WishlistServices } from '../../../whishlist/services/wishlist-services';

@Component({
  selector: 'app-products',
  imports: [ProductCard, NgxPaginationModule, SearchPipe, ɵInternalFormsSharedModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  text: string = '';
  pageSize!: number;
  p!: number;
  total!: number;
  @Input() productHome: ProductInterface = {} as ProductInterface;
  productList: ProductInterface[] | null = null;

  private readonly toster = inject(ToastrService);
  private readonly wishListServices = inject(WishlistServices);
  private readonly cartServices = inject(CartServices);
  private readonly product = inject(ProductsServices);
  private readonly platformId = inject(PLATFORM_ID);

  wishlistIds: string[] = [];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // ✅ ينفذ بس في المتصفح مش في السيرفر
      this.getProductsData();
      this.getWishlist();
    }
  }

  getWishlist() {
    this.wishListServices.getLoggedUserWishList().subscribe({
      next: (res) => {
        this.wishlistIds = res.data.map((item: any) => item.id);
        console.log('Wishlist IDs:', this.wishlistIds);
      },
      error: (err) => console.log(err),
    });
  }

  getProductsData(page: number = 1): void {
    this.product.getALLProduct(page).subscribe({
      next: (res) => {
        this.productList = res.data;
        this.pageSize = res.metadata.limit;
        this.p = res.metadata.currentPage;
        this.total = res.results;
      },
      error(err) {
        console.log(err);
      },
    });
  }

  addtoCart(id: string) {
    this.cartServices.addToCart(id).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.toster.success(res.message, '', { timeOut: 800 });
        }
      },
    });
  }

  addToWishList(id: string) {
    if (this.wishlistIds.includes(id)) {
      this.wishListServices.removeSpecificWishListItem(id).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.toster.info('Removed from wishlist', '', { timeOut: 800 });
            this.wishlistIds = this.wishlistIds.filter((x) => x !== id);
          }
        },
        error: (err) => console.log(err),
      });
    } else {
      this.wishListServices.addProductToWhishList(id).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.toster.success('Added to wishlist', '', { timeOut: 800 });
            this.wishlistIds.push(id);
          }
        },
        error: (err) => console.log(err),
      });
    }
  }
}
