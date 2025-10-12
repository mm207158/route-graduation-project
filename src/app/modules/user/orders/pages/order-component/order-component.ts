import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order-service';
import { CartItem, OrderInterface, Product } from '../../models/order-interface';
import { OrderItem } from '../../components/order-item/order-item';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-component',
  imports: [OrderItem, RouterLink],
  templateUrl: './order-component.html',
  styleUrl: './order-component.scss',
})
export class OrderComponent {
  private readonly orderService = inject(OrderService);
  orderList: OrderInterface[] = [];
    private readonly activateRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    

    this.getAllOrders();
  }
  getAllOrders() {
    this.orderService.getAllOrders().subscribe({
      next: (res) => {
        console.log(res.data);
        this.orderList=res.data
      },
    });
  }
}
