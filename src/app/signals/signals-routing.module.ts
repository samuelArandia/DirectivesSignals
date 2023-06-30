import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPagesComponent } from './pages/counter-pages/counter-pages.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertisPageComponent } from './pages/propertis-page/propertis-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { path : '', component: SignalsLayoutComponent },
      { path: 'counter', component: CounterPagesComponent},
      { path: 'user-info', component: UserInfoPageComponent},
      { path: 'propertis', component: PropertisPageComponent},
      { path: '**', redirectTo: 'counter'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
