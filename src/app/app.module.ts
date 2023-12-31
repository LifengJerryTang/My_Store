import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
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
import {AuthModule} from "@auth0/auth0-angular";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {cartReducer} from "./state/cart/cart.reducer";
import {CartService} from "./services/cart/cart.service";
import {ProductService} from "./services/product/product.service";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    ProductItemComponent,
    ConfirmationComponent,
    CartComponent,
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
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
    MatInputModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-qc2wldyjtnembiui.us.auth0.com',
      clientId: '6dlyzaKjN8Pli3d5kVuppqBCs5AN7Ifd',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    FormsModule
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
