import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userID: string;

    constructor() { }

    // Returns true if successful
    public async signIn(): Promise<boolean> {
        return false;
    }
}
