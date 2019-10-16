import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {GeographyComponent} from './geography/geography.component';
import {GastronomyComponent} from './gastronomy/gastronomy.component';
import {ActualityComponent} from './actuality/actuality.component';
import {TourismComponent} from './tourism/tourism.component';
import {ShopModuleComponent} from './shop-module/shop-module.component';
import {LogInComponent} from './log-in/log-in.component';
import {RegisterInComponent} from './register-in/register-in.component';




const routes: Routes = [
  {path: 'history', component: HistoryComponent},
  {path: 'geography', component: GeographyComponent},
  {path: 'gastronomy', component: GastronomyComponent},
  {path: 'actuality', component: ActualityComponent},
  {path: 'tourism', component: TourismComponent},
  {path: 'shop', component: ShopModuleComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

