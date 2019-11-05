import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.pug',
    styleUrls: ['./login.component.styl']
})
export class LoginComponent {

    username = '';
    password = '';
    err = '';

    users: any;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    async signIn() {
        this.err = await this.authService.signIn(this.username, this.password);
    }

    goToRegister() {
        this.router.navigate(['/auth/register']);
    }
}
