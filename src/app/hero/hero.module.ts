import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';


@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }
