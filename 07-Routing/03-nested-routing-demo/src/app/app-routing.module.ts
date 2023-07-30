import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildOneComponentComponent } from './child-one-component/child-one-component.component';
import { ChildTwoComponentComponent } from './child-two-component/child-two-component.component';

const routes: Routes = [
  {path:"parent",component:ParentComponentComponent,children:[
      {path:"child1",component:ChildOneComponentComponent},
      {path:"child2",component:ChildTwoComponentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
