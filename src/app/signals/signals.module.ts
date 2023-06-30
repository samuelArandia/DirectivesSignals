import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPagesComponent } from './pages/counter-pages/counter-pages.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertisPageComponent } from './pages/propertis-page/propertis-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPagesComponent,
    UserInfoPageComponent,
    PropertisPageComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
