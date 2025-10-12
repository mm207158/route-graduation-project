import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class ProductsServices {
  constructor(private readonly http:HttpClient){}
  getALLProduct(page:number=1):Observable<any>{
    return this.http.get(environment.apiUrl+`products?=${page}`)

  }
 getSpecifcProduct(id:string):Observable<any>{
   return this.http.get(environment.apiUrl+'products/'+id)
 }
}
