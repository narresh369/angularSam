import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpgComponent } from './firstpg/firstpg.component';
import { SecondpgComponent } from './secondpg/secondpg.component';
import { ThirdpgComponent } from './thirdpg/thirdpg.component';
import { FourthpgComponent } from './fourthpg/fourthpg.component';

const appRoutes: Routes = [
  { path: 'FirstPage', component: FirstpgComponent },
  { path: 'SecondPage', component: SecondpgComponent },
  { path: 'ThirdPage', component: ThirdpgComponent },
  { path: 'FourthPage', component: FourthpgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
