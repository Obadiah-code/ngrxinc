import { animate, style, transition, trigger } from "@angular/animations";


export const slowly = trigger('slowly', [
    transition(':enter', [
        style({
            opacity: 0,
        }),
        animate('500ms ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({
            opacity: 1,
        }),
        animate('500ms ease-in', style({ opacity: 0 }))
    ]),
]);
export const load0load = trigger('load0load', [
    transition(':enter', [
        style({
            opacity: 0,
            width: '0%'
        }),
        animate('200ms ease-in', style({ opacity: 1, width: '*' }))
    ]),
    transition(':leave', [
        style({
            opacity: 1,
            width: '*',
        }),
        animate('500ms ease-in', style({ opacity: 0, width: '0%' }))
    ])
]);