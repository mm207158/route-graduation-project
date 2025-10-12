import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ProductInterface } from '../../../../../core/models/product-interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, SlicePipe, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-product-card',
  imports: [RouterLink,  CurrencyPipe, ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product: ProductInterface = {} as ProductInterface;
  @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();

  onAddtoCart() {
    this.addToCart.emit(this.product._id);
  }
}
