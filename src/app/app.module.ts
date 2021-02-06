import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ShopingComponent } from './components/shoping/shoping.component';
import { ShopingListComponent } from './components/shoping/shoping-list/shoping-list.component';
import { ModalBlockComponent } from './shared/components/modal-block/modal-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShopingComponent,
    ShopingListComponent,
    ModalBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
