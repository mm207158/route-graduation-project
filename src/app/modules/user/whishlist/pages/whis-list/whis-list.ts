import { Component, inject } from '@angular/core';
import { WishlistServices } from '../../services/wishlist-services';
import { ToastrService } from 'ngx-toastr';
import { WishlistItem } from '../../components/wishlist-item/wishlist-item';
import { RouterLink } from '@angular/router';
import { CartServices } from '../../../cart/services/cart-services';

@Component({
  selector: 'app-whis-list',
  standalone: true,
  imports: [WishlistItem, RouterLink],
  templateUrl: './whis-list.html',
  styleUrl: './whis-list.scss',
})
export class WhisList {
  private readonly wishListServices = inject(WishlistServices);
  private readonly cartServices = inject(CartServices);
  private readonly toaster = inject(ToastrService);

  isLoaded: boolean = false;
  wishlistData: any[] = [];

  ngOnInit(): void {
    this.getAllCartList();
  }

  // ✅ جلب كل عناصر الـ Wishlist
  getAllCartList() {
    this.wishListServices.getLoggedUserWishList().subscribe({
      next: (res) => {
        this.wishlistData = res.data;
        this.isLoaded = true;
      },
      error: () => {
        this.toaster.error('Failed to load wishlist');
        this.isLoaded = true;
      },
    });
  }

  // ✅ حذف عنصر من الـ Wishlist
  removeItem(id: string) {
    this.wishListServices.removeSpecificWishListItem(id).subscribe({
      next: () => {
        this.toaster.error('Product removed!');
        this.getAllCartList();
      },
      error: () => {
        this.toaster.error('Failed to remove product');
      },
    });
  }

  // ✅ إضافة كل المنتجات إلى الـ Cart
  addAllToCart() {
    if (!this.wishlistData.length) {
      this.toaster.warning('Wishlist is empty!');
      return;
    }

    this.wishlistData.forEach((item) => {
      this.cartServices.addToCart(item._id).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.toaster.success(`Added ${item.title} to cart`, '', {
              timeOut: 800,
            });
          }
        },
        error: () => {
          this.toaster.error(`Failed to add ${item.title}`);
        },
      });
    });
  }
}
