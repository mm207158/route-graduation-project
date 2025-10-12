import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { Product, Product2 } from '../../models/cart-interface';
import { CartServices } from '../../services/cart-services';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem {
  @Input() product: Product = {} as Product;
  @Output() removeItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateItem = new EventEmitter<{id:string,count:number}>();
  private readonly cartServices = inject(CartServices);

  onRemoveItem() {
    this.removeItem.emit(this.product.product._id);
  }
  onUpdateQauntity(count:number){
this.updateItem.emit({id:this.product.product._id,count})
  }
}
