import { Component, Input } from '@angular/core';
import { BrandsInterfce } from '../../models/brands-interfce.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-card',
  imports: [],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.scss'
})
export class BrandCardComponent {
  @Input() brand:BrandsInterfce={}as BrandsInterfce

}
