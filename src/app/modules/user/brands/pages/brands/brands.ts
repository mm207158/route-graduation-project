import { Component, inject } from '@angular/core';
import { BrandsServicesService } from '../../services/brands-services.service';

import { BrandsInterfce } from '../../models/brands-interfce.interface';
import { BrandCardComponent } from "../../components/brand-card/brand-card.component";

@Component({
  selector: 'app-brands',
  imports: [BrandCardComponent],
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})
export class Brands {
  private readonly brandServices = inject(BrandsServicesService);
  brandsList!:BrandsInterfce[];
  ngOnInit(): void {
    this.getBrandsData()
  }
  getBrandsData() {
    this.brandServices.getBarnds().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.brandsList=res.data;
        

      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  }
}
