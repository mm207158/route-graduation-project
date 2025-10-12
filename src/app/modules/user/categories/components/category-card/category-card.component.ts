import { Component, Input } from '@angular/core';

import { CategoryInterface } from '../../../../../core/models/category-interface.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {

  @Input() category:CategoryInterface={}as CategoryInterface;
}
