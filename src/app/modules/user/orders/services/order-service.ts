import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthServices } from '../../../auth/services/auth-services';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly http = inject(HttpClient);
  private readonly authServices = inject(AuthServices);
  createOrder(
    productId: string,
    shippingAddres: { details: string; phone: string; city: string }
  ): Observable<any> {

    console.log(productId,shippingAddres);
    const returnUrl='?url=http://localhost:4200/user'
    return this.http.post(
      environment.apiUrl + 'orders/checkout-session/'+productId+returnUrl,
      {
        shippingAddres,
      },
      {
        headers: {
          token: this.authServices.getToken() as string,
        },
      }
    );
  }
  getAllOrders():Observable<any>{
  return this.http.get(environment.apiUrl+'orders/');
  }
  getAllUserOrders(id:string):Observable<any>{
  return this.http.get(environment.apiUrl+'orders/user/'+id);
  }
    
  
}
