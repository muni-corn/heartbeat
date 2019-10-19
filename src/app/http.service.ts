import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    getUsers(): any {
        throw new Error('Method not implemented.');
    }

    constructor(private http: HttpClient) { }

    public async test(msg: string): Promise<any> {
        return await this.http.get('/api/test.php', {
            params: {
                msg
            },
            responseType: 'text'
        }).toPromise();
    }

    public async getUsers(): Promise<any> {
        return await this.http.get('/api/users.php', {
            responseType: 'json'
        }).toPromise();
    }
}
