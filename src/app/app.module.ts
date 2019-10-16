import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { GastronomyComponent } from './gastronomy/gastronomy.component';
import { ActualityComponent } from './actuality/actuality.component';
import { TourismComponent } from './tourism/tourism.component';
import { ShopModuleComponent } from './shop-module/shop-module.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterInComponent } from './register-in/register-in.component';
import { GeographyComponent } from './geography/geography.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    GeographyComponent,
    GastronomyComponent,
    ActualityComponent,
    TourismComponent,
    ShopModuleComponent,
    LogInComponent,
    RegisterInComponent,
    GeographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
