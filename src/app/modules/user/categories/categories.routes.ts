import { Routes } from "@angular/router";
import { title } from "process";

export const Categories_Routes:Routes=[
  {path:"categories",loadComponent:()=>import('./pages/categories/categories').then((c)=>c.Categories),
    data:{
       renderMode: 'prerender',title:'Categories'

    }
  },
  {path:"categories-details",loadComponent:()=>import('./pages/categories-details/categories-details').then((c)=>c.CategoriesDetails),
   
  },
]