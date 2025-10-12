import { Component } from '@angular/core';

import { ProductInterface } from '../../../../../core/models/product-interface';

import { Products } from '../../../products/pages/products/products';
import { MainSlider } from '../../components/main-slider/main-slider';
import { CategorySlider } from '../../components/category-slider/category-slider';

@Component({
  selector: 'app-home',
  imports: [Products, MainSlider, CategorySlider],

  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
 
  product: ProductInterface = {} as ProductInterface;

  
  
}
