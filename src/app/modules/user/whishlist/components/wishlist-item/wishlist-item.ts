import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wishlist-item',
  standalone: true,
  templateUrl: './wishlist-item.html',
  styleUrl: './wishlist-item.scss',
})
export class WishlistItem {
  @Input() product: any = {};
  @Output() removeItem = new EventEmitter<string>();

  onRemoveItem() {
    this.removeItem.emit(this.product._id);
  }
}
