import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AppComponent } from './app.component';
import { PassingQueryParamDemoComponent } from './02-passing-query-param-demo/passing-query-param-demo.component';
import { PassingRouteParamDemoComponent } from './01-passing-route-param-demo/passing-route-param-demo.component';
import { NotFoundComponent } from './04-not-found/not-found.component';
import { PassingFragmentDemoComponent } from './03-passing-fragment-demo/passing-fragment-demo.component';

const routes: Routes = [
  {path:"",component:CustomersComponent},
  {path:"customer",component:CustomersComponent},
  {path:"customer/:id",component:CustomersComponent},
  {path:"test-query-param",component:PassingQueryParamDemoComponent},
  {path:"test-route-param",component:PassingRouteParamDemoComponent},
  {path:"test-route-param/:id",component:PassingRouteParamDemoComponent},
  {path:"test-fragment",component:PassingFragmentDemoComponent},
  {path:"not-found",component:NotFoundComponent},
  {path:"**",redirectTo:"/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
