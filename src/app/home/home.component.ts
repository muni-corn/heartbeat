import { Component, OnInit } from '@angular/core';
import {LinkService} from 'src/link.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.pug',
    styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

    newKey: string;

    constructor(
        private linkService: LinkService
    ) { }

    ngOnInit() { }

    newLink() {
        this.linkService.newLinkRequest(this.newKey);
    }
}
