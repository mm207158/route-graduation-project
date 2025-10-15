import { Routes } from "@angular/router";
import { authGuard } from "../../../core/guard/auth-guard";

export const WishList_Routes:Routes=[
    {path:"wishlist",loadComponent:()=>import('./pages/whis-list/whis-list').then((c)=>c.WhisList),title:"Whishlist",canActivate: [authGuard],},
    
]