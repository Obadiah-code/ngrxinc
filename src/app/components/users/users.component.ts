import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserSelector from '../../state/user/user.selector';
import * as UserActions from '../../state/user/user.actions';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
    
    users$ = this.store.select(UserSelector.selectUsers);
    loading$ = this.store.select(UserSelector.selectLoading);
    loaded$ = this.store.select(UserSelector.selectLoaded);
    error$ = this.store.select(UserSelector.selectError);


    constructor(private store: Store) {

    }

    
    ngOnInit(): void {
        this.store.dispatch(UserActions.loadUsers());
    }

    remove(id: number) {
        this.store.dispatch(UserActions.removeUser({id}))
    }
    add() {
        let rnd = Math.floor(Math.random() * 1000)
        let user: User = {
            id: rnd,
            name: "ravasm" + rnd,
            email: `${rnd}ravasm${rnd}@gmail.com`
        };
        this.store.dispatch(UserActions.addUser({user}))
    }
}
