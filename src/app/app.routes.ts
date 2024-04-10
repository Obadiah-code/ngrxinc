import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    {path: 'counter', component: CounterComponent},
    {path: 'products', component: ProductComponent},
    {path: 'users', component: UsersComponent},
    {path: '', redirectTo: '/counter', pathMatch: 'full' },
];
