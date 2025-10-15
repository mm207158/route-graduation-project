import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { AuthServices } from '../../../auth/services/auth-services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistServices {
 private readonly http= inject(HttpClient);
  private readonly authServices = inject(AuthServices);


 addProductToWhishList(productId: string): Observable<any> {
    return this.http.post(
      environment.apiUrl + 'wishlist',
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

 removeSpecificWishListItem(id:string):Observable<any>{
    return this.http.delete(environment.apiUrl+`wishlist/${id}`,
    {
      headers:{
        token:this.authServices.getToken()as string
      }
    }

    )
  }

  getLoggedUserWishList():Observable<any>{
    return this.http.get(
      environment.apiUrl +"wishlist",
      
      {
        headers: {
          token: this.authServices.getToken() as string,
        },
      }
    );

  }
 
}
