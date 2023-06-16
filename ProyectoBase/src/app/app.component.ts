import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    isAuthenticated: boolean = false;

    constructor( private _authService: AuthService ) { }

    ngOnInit(): void {
        
        this._authService.getAuth().subscribe( data => {
            this.isAuthenticated = data;            
        });

        setTimeout(() => {
            this._authService.setAuth( true );
            
        }, 1000);

        setTimeout(() => {
            this._authService.setAuth( false );
            
        }, 3000);        
    }

}