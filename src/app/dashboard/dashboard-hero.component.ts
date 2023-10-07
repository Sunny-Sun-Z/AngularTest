import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../model/hero';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-dashboard-hero',
  template: `
    <button type="button" class="hero" (click)="onClick()">{{hero.name}}</button>
  `,
  styleUrls: ['./dashboard-hero.component.css']
})
export class DashboardHeroComponent {
 @Input() hero!: Hero;
 @Output() selected = new EventEmitter<Hero>();

 onClick(){
  this.selected.emit(this.hero);
 }
}
