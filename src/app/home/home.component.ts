import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/link.service';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.pug',
    styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

    key: string;
    newKey: string;

    constructor(
        private linkService: LinkService,
        private authService: AuthService
    ) { }

    ngOnInit() { 
        this.key = this.authService.getUserKeycode();
    }

    newLink() {
        this.linkService.newLinkRequest(this.newKey);
    }
}
