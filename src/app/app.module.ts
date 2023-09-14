import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CartComponent } from './components/cart/cart.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {cartReducer} from "./state/cart/cart.reducer";


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    ProductItemComponent,
    ConfirmationComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    FontAwesomeModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    NgOptimizedImage,
    MatSelectModule,
    StoreModule.forRoot({cart: cartReducer}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
