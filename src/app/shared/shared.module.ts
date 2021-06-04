import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DetailSearchComponent } from './components/detail-search/detail-search.component';

const SHARED_EXPORTS = [
  HeaderComponent,
  DetailSearchComponent,
];

@NgModule({
  declarations: [
    ...SHARED_EXPORTS,
  ],
  exports: [
    ...SHARED_EXPORTS,
  ],
  imports: [
    CommonModule,
  ],
  providers:[
      
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }

