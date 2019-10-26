import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    public async test(msg: string): Promise<any> {
        return await this.http.get('/api/test.php', {
            params: {
                msg
            },
            responseType: 'text'
        }).toPromise();
    }

}
