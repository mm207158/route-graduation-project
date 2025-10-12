import { Routes } from "@angular/router";

export const Cart_Routes:Routes=[
    {path:"cart",loadComponent:()=>import('./pages/cart/cart').then((c)=>c.Cart),title:"Cart"},
    
]