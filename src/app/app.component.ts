import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CounterModule } from './components/counter/counter.module';
import { load0load, slowly } from './scripper/animations';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HttpClientModule, CounterModule, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [slowly, load0load],
})
export class AppComponent {
    title = 'ngrxinc';
}
