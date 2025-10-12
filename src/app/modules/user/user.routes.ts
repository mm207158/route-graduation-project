import { Routes } from "@angular/router";
import { UserLayout } from "../../layouts/user-layout/user-layout";
import { Products_Routes } from "./products/products.routes";
import { Home_Routes } from "./home/home.routes";
import { Cart_Routes } from "./cart/carts.routes";
import { Categories_Routes } from "./categories/categories.routes";
import { Brands_Routes } from "./brands/brands.routes";
import { WishList_Routes } from "./whishlist/wihlist.routes";
import { Order_Routes } from "./orders/order.routes";

export const User_Routes: Routes = [
  {
    path: "user",
    component: UserLayout,
    children: [
       
      ...Products_Routes,
      ...Home_Routes,
      ...Cart_Routes, 
      ...Categories_Routes,
      ...Brands_Routes,
      ...WishList_Routes,
      ...Order_Routes
    ],
  },
];
