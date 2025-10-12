import { Routes } from "@angular/router";
import { authGuard } from "../../../core/guard/auth-guard";

export const Cart_Routes:Routes=[
    {path:"cart",loadComponent:()=>import('./pages/cart/cart').then((c)=>c.Cart),title:"Cart",canActivate: [authGuard],},
    
]