import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private auth$ = new Subject<boolean>();

    constructor() { }

    getAuth(): Observable<boolean> {
        return this.auth$.asObservable();
    }

    setAuth(valor: boolean): void {
        this.auth$.next(valor);
    }
}
