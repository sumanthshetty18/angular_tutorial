import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAuthModule } from './user-auth/user-auth.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Tut2Component } from './tut2/tut2.component';
import { Tut2NestedComponent } from './tut2/tut2-nested/tut2-nested.component';
import { FooterComponent } from './footer/footer.component';
import { Tut3Component } from './tut3/tut3.component';
import { HttpClientModule } from '@angular/common/http';
import { Tut4Component } from './tut4/tut4.component';
import { USDtoINRPipe } from './pipes/usdto-inr.pipe';
import { UserlistComponent } from './userlist/userlist.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Tut2Component,
    Tut2NestedComponent,
    FooterComponent,
    Tut3Component,
    Tut4Component,
    USDtoINRPipe,
    UserlistComponent,
    ErrorPageComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
