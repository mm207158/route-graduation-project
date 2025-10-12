import { Routes } from "@angular/router";

export const Home_Routes:Routes=[
   
    {path:"home",loadComponent:()=>import('./pages/home/home').then((c)=>c.Home),title:"home"},
    
]