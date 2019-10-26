import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.pug',
    styleUrls: ['./login.component.styl']
})
export class LoginComponent {

    username = '';
    password = '';

    users: any;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    async signIn() {
        this.users = await this.userService.getUsers();
    }

    goToRegister() {
        this.router.navigate(['/auth/register']);
    }

}
