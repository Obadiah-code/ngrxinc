import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from "./../../state/counter/counter.actions";
import { slowly, load0load } from '../../scripper/animations';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  animations: [slowly, load0load]
})
export class CounterComponent {

    counter$: Observable<number> = this.store.select('counter');

    constructor(private store: Store<{counter: number}>) {

    }

    increment() {
        this.store.dispatch(CounterActions.increment())
    }

    decrement() {
        this.store.dispatch(CounterActions.decrement())
    }

    reset() {
        this.store.dispatch(CounterActions.reset())
    }
}
