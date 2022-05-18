import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MerchantRoutingModule} from './merchant-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FoodListComponent} from './food-list/food-list.component';
import {MyMerchantBannerComponent} from './my-merchant-banner/my-merchant-banner.component';
import {SecondNavbarComponent} from './second-navbar/second-navbar.component';
import {DishesComponent} from './dishes/dishes.component';
import {InfoComponent} from './info/info.component';
import {ListOrderByDishComponent} from './list-order-by-dish/list-order-by-dish.component';
import {CustomerModule} from '../customer/customer.module';
import {DishEditComponent} from './dish-edit/dish-edit.component';
import {DishCreateComponent} from './dish-create/dish-create.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CountOrdersByDishComponent } from './count-orders-by-dish/count-orders-by-dish.component';
import { CountOrdersByUserComponent } from './count-orders-by-user/count-orders-by-user.component';
import { ListOrderByCustomerComponent } from './list-order-by-customer/list-order-by-customer.component';

@NgModule({
  declarations: [FoodListComponent, MyMerchantBannerComponent,
    SecondNavbarComponent, DishesComponent, InfoComponent,
    ListOrderByDishComponent, DishCreateComponent, DishEditComponent, OrderListComponent, CountOrdersByDishComponent, CountOrdersByUserComponent, ListOrderByCustomerComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule,
    CustomerModule
  ]
})
export class MerchantModule {
}
