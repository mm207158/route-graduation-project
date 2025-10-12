import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private readonly http=inject(HttpClient)
  
  getCategory():Observable<any>{
    return this.http.get(environment.apiUrl+'categories')
  }
  getSpecificCategory(id:any):Observable<any>{
    return this.http.get(environment.apiUrl+'categories/'+id)
  }
}
