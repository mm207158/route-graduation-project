import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInterface } from '../../../../../core/models/product-interface';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common'; // ✅ أضيفي CommonModule هنا

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, CommonModule], // ✅ أضيفي CommonModule هنا
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product: ProductInterface = {} as ProductInterface;
  @Input() isInWishlist: boolean = false; // ✅ أضفنا الحالة

  @Output() addToCart = new EventEmitter<string>();
  @Output() addToWishList = new EventEmitter<string>();

  onAddtoCart() {
    this.addToCart.emit(this.product._id);
  }

  onAddtoWishList() {
    this.addToWishList.emit(this.product._id);
  }
}
