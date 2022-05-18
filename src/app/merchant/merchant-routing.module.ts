import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesComponent} from './dishes/dishes.component';
import {InfoComponent} from './info/info.component';
import {ListOrderByDishComponent} from './list-order-by-dish/list-order-by-dish.component';
import {DishEditComponent} from './dish-edit/dish-edit.component';
import {DishCreateComponent} from './dish-create/dish-create.component';

const routes: Routes = [

  {
    path: '',
    component: DishesComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'dishes/:id/orders',
    component: ListOrderByDishComponent
  },
  {
    path: 'dish/create',
    component: DishCreateComponent
  },
  {
    path: 'dish/edit/:id',
    component: DishEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
