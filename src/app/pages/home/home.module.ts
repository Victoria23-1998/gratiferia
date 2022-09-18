import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ShredModule } from 'src/app/shred/shred.module';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule ,
    ShredModule 
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
