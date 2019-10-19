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

    constructor(private http: HttpService) { }

    ngOnInit() {
    }

    async signIn() {
        const ret = await this.http.test(this.username);
        console.log(ret)
    }

}
