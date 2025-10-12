import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsServicesService {
  
  private readonly http=inject(HttpClient);
  getBarnds():Observable<any>{
    return this.http.get(environment.apiUrl+'brands');
  }
  getSpecificBarnds(id:string):Observable<any>{
    return this.http.get(environment.apiUrl+'brands/'+id);
  }
}
