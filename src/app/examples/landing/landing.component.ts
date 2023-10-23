import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [ 
      trigger('fadeIn', [
        state('void', style({ opacity: 0 })),
        transition('void <=> *', animate(2000)),
      ]),
      trigger('slideFromLeft', [
        state('out', style({ transform: 'translateX(-100%)' })),
        state ('in', style({ transform: 'translateX(0)' })),
        transition('out => in', animate('2s')),
        transition('in => out', animate('2s'))
      ]),
      trigger('zoomIn', [
         state('void', style({ opacity:0, transform: 'scale(0.5)' })),
         transition('void <=> *', animate(2000)),
      ]),
      trigger('rotateIn', [
        state('void', style({ opacity:0, transform: 'rotate(-90deg)' })),
        transition('void <=> *', animate(2000)),
      
      ]),
      trigger('bounceIn', [
        state('void', style({  transform: 'translateY(-100%)' })),
        transition('void <=> *', [
          animate('0.5s 0.1s ease', style({ transform: 'translateY(25px)' })),
          animate('0.5s 0.1s ease', style({ transform: 'translateY(0)' }))
        ])
        ])
    
 
    ]
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  fadeInState = 'void';
  slideState = 'out';
  constructor() { }

  ngOnInit() {}
  
  togleFadeIn() {
    this.fadeInState = this.fadeInState === 'void' ? '*' : 'void';
  }
  togleSlide() {
    this.slideState = this.slideState === 'out' ? 'in' : 'out';
  }
}
