import { animate, group, query, style, transition, trigger } from '@angular/animations';

const animationTiming = '500ms ease-in';

export const animationEnter = [
  query(':self', style({ position: 'fixed', width: '100%' }), { optional: true }),
  style({ transform: 'translateX(100%)' }),
  animate(animationTiming, style({ transform: 'translateX(0%)' }))
];

export const animationLeave = [
  query(':self', style({ position: 'fixed', width: '100%' }), { optional: true }),
  animate(animationTiming, style({ transform: 'translateX(-100%)' }))
];

export const animationNext = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate(animationTiming, style({ transform: 'translateX(0%)' }))], {
      optional: true
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate(animationTiming, style({ transform: 'translateX(-100%)' }))], {
      optional: true
    })
  ])
];

export const animationPrev = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate(animationTiming, style({ transform: 'translateX(0%)' }))], {
      optional: true
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate(animationTiming, style({ transform: 'translateX(100%)' }))], {
      optional: true
    })
  ])
];

export const animationEnterLeave = trigger('animationEnterLeave', [
  transition(':enter', animationEnter),
  transition(':leave', animationLeave)
]);

export const animationPrevNext = trigger('animationPrevNext', [
  transition(':increment', animationNext),
  transition(':decrement', animationPrev)
]);

export const animationList = [animationEnterLeave, animationPrevNext];
