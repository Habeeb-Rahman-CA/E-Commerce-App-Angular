import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { MyOrderComponent } from './pages/my-order/my-order.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ProductsComponent },
    { path: 'create-order', component: CreateOrderComponent },
    { path: 'my-order', component: MyOrderComponent },
    {path: 'order-success', component: OrderSuccessComponent}
];
