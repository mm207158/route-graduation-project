import { Component, inject, Input, OnInit } from '@angular/core';

import { CategoryCardComponent } from "../../components/category-card/category-card.component";
import { CategoryInterface } from '../../../../../core/models/category-interface.interface';
import { CategoryServiceService } from '../../../../../core/services/category-service.service';

@Component({
  selector: 'app-categories',
  imports: [CategoryCardComponent],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories implements OnInit {
  @Input() categry:CategoryInterface ={} as CategoryInterface
   private readonly categoriesService=inject(CategoryServiceService);
   ngOnInit(): void {
    this.getCategoriesData();
    
   }
   categoryList!:CategoryInterface[]
   getCategoriesData():void{
    this.categoriesService.getCategory().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.categoryList=res.data
        

      },
      error:(err)=>{
               console.log(err);
               
      }
    })

   }
  


}
