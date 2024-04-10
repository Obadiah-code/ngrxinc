import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { delay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseUrl = '/api/users';

    constructor(public http: HttpClient) {

    }

    add(user: User) {
        return this.http.post(this.baseUrl, user);
    }

    get() {
        return this.http.get(this.baseUrl).pipe(delay(4000));
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
