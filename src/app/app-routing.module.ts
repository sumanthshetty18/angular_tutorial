import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TestComponent } from './test/test.component';
import { Tut2Component } from './tut2/tut2.component';
import { Tut3Component } from './tut3/tut3.component';
import { Tut4Component } from './tut4/tut4.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { 'path': 'tut1', component: TestComponent },
  { 'path': 'tut2', component: Tut2Component },
  { 'path': 'tut3', component: Tut3Component },
  {
    'path': 'tut4', component: Tut4Component, children: [
      { 'path': 'childA', component: ChildAComponent },
      { 'path': 'childB', component: ChildBComponent }]
  },
  { 'path': 'user/:userId', component: UserlistComponent },
  { 'path': '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
