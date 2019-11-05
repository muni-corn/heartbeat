import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.pug',
    styleUrls: ['./navigation-bar.component.styl']
})
export class NavigationBarComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    signOut(): void {
        this.authService.signOut();
    }

    goToHome(): void {
        this.router.navigate(['/home']);
    }

}
