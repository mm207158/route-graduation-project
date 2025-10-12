import { Routes } from "@angular/router";

export const Products_Routes: Routes = [
  {
    path: "products",
    loadComponent: () =>
      import('./pages/products/products').then((c) => c.Products),
    title: "Product",
     
  },
  {
    path: "product_details/:slug/:id",
    loadComponent: () =>
      import('./pages/product-details/product-details').then((c) => c.ProductDetails),
    title: "Product Details",
    
    }
 
];
