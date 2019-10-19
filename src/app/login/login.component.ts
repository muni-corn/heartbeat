import { Component, OnInit } from '@angular/core';
import {HttpService} from 'src/app/http.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.pug',
    styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';

    users: any;

    constructor(private http: HttpService) { }

    ngOnInit() {
    }

    async signIn() {
        this.users = await this.http.getUsers();
    }

}
