import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.mode';
import { productState } from '../../state/product/product.selector';
import { CommonModule } from '@angular/common';
import * as ProductActions from '../../state/product/product.actions';
import { MatButtonModule } from '@angular/material/button';
import { load0load, slowly } from '../../scripper/animations';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    animations: [slowly, load0load]
})
export class ProductComponent implements OnInit, AfterViewInit{

    products$ = this.store.select(productState);
    h: number = 0;
    @ViewChild("tab0") tab0!: ElementRef<HTMLDivElement>;
    window: Window | undefined = undefined;
    

    constructor( private store: Store<{products: ReadonlyArray<Product>}>) {
        // console.log(window)
    }

    ngOnInit(): void {
        this.see();
    }
    
    ngAfterViewInit(): void {
        // this.window = window
    }

    add() {
        this.see()
        const rnd = Date.now().toString();
        const product1: Product = {
            id: rnd,
            name: 'product'+rnd,
            price: 1000,
        }
        
        this.store.dispatch(ProductActions.addProduct({product: product1}))
    }
    
    see() {
        console.log(this.tab0, this.window)
        if (this.tab0 && this.window) {
            this.h = this.window.innerHeight - this.tab0.nativeElement.getBoundingClientRect().top; 
        }    
    }

    tonbr(v?: number) {
        return v ? v: 0; 
    }
    remove(id: string) {
        this.store.dispatch(ProductActions.removeProduct({id}))
    }
}
