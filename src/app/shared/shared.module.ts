import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const SHARED_EXPORTS = [
  HeaderComponent
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

