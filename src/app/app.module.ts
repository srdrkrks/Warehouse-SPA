import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbModalModule} from 'mdb-angular-ui-kit/modal';
import {MdbPopoverModule} from 'mdb-angular-ui-kit/popover';
import {MdbRadioModule} from 'mdb-angular-ui-kit/radio';
import {MdbRangeModule} from 'mdb-angular-ui-kit/range';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import {MdbTooltipModule} from 'mdb-angular-ui-kit/tooltip';
import {MdbValidationModule} from 'mdb-angular-ui-kit/validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductListComponent} from './product/product-list/product-list.component';
import {BoxListComponent} from './box/box-list/box-list.component';
import {NavBarComponent} from './common/nav-bar/nav-bar.component';
import {BoxDetailComponent} from './box/box-detail/box-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { ConfirmModalComponent } from './common/confirm-modal/confirm-modal.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { NewBoxComponent } from './box/new-box/new-box.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'boxes',
    component: BoxListComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BoxListComponent,
    NavBarComponent,
    BoxDetailComponent,
    ConfirmModalComponent,
    NewProductComponent,
    NewBoxComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
