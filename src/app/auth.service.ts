import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const localStorageKey = 'USER_ID';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // really crappy way of storing a session
    private currentUser: { id: number, keycode: string };

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.currentUser = JSON.parse(localStorage.getItem(localStorageKey));
    }

    // Returns an error as a string, or null
    public async signIn(username: string, password: string): Promise<string> {
        try {
            this.currentUser = await this.http.post<{ id: number, keycode: string }>('/api/sign_in.php', {
                username, password
            }, {
                responseType: 'json'
            }).toPromise<{ id: number, keycode: string }>();
        } catch (e) {
            if (!e.ok) {
                switch (e.status) {
                    case 401:
                        return 'Your username or password is wrong';
                    default:
                        return 'There was an error. Try again?';
                }
            }
        }

        localStorage.setItem(localStorageKey, JSON.stringify(this.currentUser));
        this.router.navigate(['/home']);
        return null;
    }

    // Returns true if successful
    public async register(username: string, password: string): Promise<boolean> {
        try {
            this.currentUser.id = Number(await this.http.post('/api/new_user.php', {
                username, password
            }, {
                responseType: 'text'
            }).toPromise());
        } catch (e) {
            return false;
        }

        localStorage.setItem(localStorageKey, JSON.stringify(this.currentUser));
        return true;
    }

    public isAuthenticated(): boolean {
        return Number(this.currentUser.id) >= 1000;
    }

    public signOut(): void {
        this.currentUser = null;
        localStorage.removeItem(localStorageKey);
        this.router.navigate(['/auth/login']);
    }

    public getUserID(): number {
        return this.currentUser.id;
    }

    public getUserKeycode(): string {
        return this.currentUser.keycode;
    }

}

