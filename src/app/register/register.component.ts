import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

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

    constructor(private userService: UserService) { }

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

        this.id = await this.userService.newUser(this.username, this.password);
        this.showSuccess();
    }

    showSuccess() {
        this.messages =
            'Your account has been created! ' +
            'Nothing else happens here yet. ' +
            'But to demonstrate that the database is working, ' +
            'here\'s the ID that was returned when we created your account:';
    }
}
