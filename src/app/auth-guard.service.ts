import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from 'src/app/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(): boolean {
        const gucci = this.authService.isAuthenticated();
        if (!gucci) {
            this.router.navigate(['/auth/login']);
            return false;
        }

        return true;
    }
}
