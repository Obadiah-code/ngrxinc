import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [
        CounterComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
    ],
    exports: [CounterComponent]
})
export class CounterModule { }
