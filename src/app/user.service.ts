import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    public async newUser(username: string, password: string): Promise<string> {
        return await this.http.post('/api/new_user.php', {
            username,
            password
        }, {
            responseType: 'text'
        }).toPromise();
    }

    public async getUsers(): Promise<any> {
        return await this.http.get('/api/users.php', {
            responseType: 'json'
        }).toPromise();
    }
}
