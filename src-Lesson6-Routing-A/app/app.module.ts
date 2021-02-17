import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';
import { MyservicediService } from './myservicedi/myservicedi.service';
import { HttpClientModule } from '@angular/common/http';

//------------------------- ROUTING IN SEPARATE FILE -----------------
import { AppRoutingModule } from './app-routing.module';
//------------------------- ROUTING IN SEPARATE FILE -----------------


//------------------------ ROUTING DIRECTLY SPECIFYING ---------------------------------------
/* import { RouterModule, Routes } from '@angular/router';
 const appRoutes: Routes = [
  { path: 'Inventory', component: InventoryComponent },
  { path: 'Product', component: ProductsComponent },
];  */
//------------------------ ROUTING DIRECTLY SPECIFYING ---------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule//AppRoutingModule IS DECLARED IN A SEPARATE FILE app-routing.module.ts

    //------------------------ ROUTING DIRECTLY SPECIFYING ---------------------------------------
    //RouterModule.forRoot(appRoutes)    
    //------------------------ ROUTING DIRECTLY SPECIFYING ---------------------------------------
  ],
  providers: [MyservicediService],
  bootstrap: [AppComponent]
})
export class AppModule { }
