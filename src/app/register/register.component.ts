import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.pug',
    styleUrls: ['./register.component.styl']
})
export class RegisterComponent implements OnInit {

    public username = '';
    public password = '';
    public passwordConfirm = '';
    public errors = '';
    public id = '';
    public messages = '';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    getErrors(): string[] {
        const errs: string[] = [];
        if (this.password !== this.passwordConfirm) {
            errs.push('Passwords don\'t match');
        }

        return errs;
    }

    async submit() {
        const errs = this.getErrors();

        if (errs.length > 0) {
            this.errors = errs.join('\n');
            return;
        } else {
            this.errors = '';
        }

        if (await this.authService.register(this.username, this.password)) {
            this.router.navigate(['/home']);
        } else {
            this.errors = 'There was an error registering you. Try again.';
        }
    }

    goToSignin() {
        this.router.navigate(['/auth/login']);
    }
}
