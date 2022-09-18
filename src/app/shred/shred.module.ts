import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShredComponent } from './shred.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule
  ],
  exports:[
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule
  ],

  declarations: [ShredComponent]
})
export class ShredModule { }
