import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SharedModule } from './shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { SearchService } from './services/search.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
