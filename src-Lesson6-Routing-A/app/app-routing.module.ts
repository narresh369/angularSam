import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: 'Inventory', component: InventoryComponent },
  { path: 'Product', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
