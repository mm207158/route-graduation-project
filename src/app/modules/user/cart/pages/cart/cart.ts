import { Component, inject } from '@angular/core';
import { CartServices } from '../../services/cart-services';
import { CartInterface } from '../../models/cart-interface';
import { CartItem } from '../../components/cart-item/cart-item';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [CartItem,RouterLink],

  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  private readonly cartServices = inject(CartServices);
  private readonly toaster = inject(ToastrService);
  isLoaded:boolean=false

  cartDetail: CartInterface = {} as CartInterface;

  ngOnInit(): void {
    this.getAllCartList();
  }
  getAllCartList() {
    this.cartServices.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartDetail = res;
        this.isLoaded=true
        console.log(this.cartDetail.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  removeItem(id:string){
    this.cartServices.removeSpecificCartItem(id).subscribe({
      next:(res)=>{
        this.toaster.error('Product is Deleted!')
         this.cartDetail = res;
        console.log(res);
        
      }
    })
   }
  updateQuantity(id:string,count:number){
    this.cartServices.updateQuantity(id,count).subscribe({
      next:(res)=>{
        this.toaster.success('Product Updated!')
         this.cartDetail = res;
        console.log(res);
        
      }
    })
   }

}
