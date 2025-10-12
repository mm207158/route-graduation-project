import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { AuthServices } from './../../../auth/services/auth-services';

@Injectable({
  providedIn: 'root',
})
export class CartServices {
  private readonly http = inject(HttpClient);
  private readonly authServices = inject(AuthServices);

  addToCart(productId: string): Observable<any> {
    return this.http.post(
      environment.apiUrl + 'cart/',
      {
        productId,
      },
      {
        headers: {
          token: this.authServices.getToken() as string,
        },
      }
    );
  }
  updateQuantity(id: string,count:number): Observable<any> {
    return this.http.put(
      environment.apiUrl + `cart/${id}`,
      {
       count,
      },
      {
        headers: {
          token: this.authServices.getToken() as string,
        },
      }
    );
  }
  getLoggedUserCart(): Observable<any> {
    return this.http.get(
      environment.apiUrl +"cart",
      
      {
        headers: {
          token: this.authServices.getToken() as string,
        },
      }
    );
  }
  removeSpecificCartItem(id:string):Observable<any>{
    return this.http.delete(environment.apiUrl+`cart/${id}`,
    {
      headers:{
        token:this.authServices.getToken()as string
      }
    }

    )
  }
  clearUserCart():Observable<any>{
    return this.http.delete(environment.apiUrl+'cart',
      {
        headers:{
          token:this.authServices.getToken()!
        }
      }
    )
    
  }
}
