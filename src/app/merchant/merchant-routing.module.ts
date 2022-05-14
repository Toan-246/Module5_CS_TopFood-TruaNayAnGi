import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishListComponent} from './dish-list/dish-list.component';


const routes: Routes = [
  {
    path: 'dishes',
    component: DishListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
