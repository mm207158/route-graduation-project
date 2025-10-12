import { Component, Input } from '@angular/core';
import { CartItem, OrderInterface, Product } from '../../models/order-interface';

@Component({
  selector: 'app-order-item',
  imports: [],
  templateUrl: './order-item.html',
  styleUrl: './order-item.scss'
})
export class OrderItem {
@Input() order: CartItem= {} as CartItem;

}
