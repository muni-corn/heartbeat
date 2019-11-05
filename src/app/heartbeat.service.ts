import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HeartbeatService {

    constructor(private http: HttpClient) { }

    async sendHeartbeats(count: string, to: string): Promise<any> {
        return await this.http.post('/api/send_heartbeats.php', {
            count, to
        }).toPromise();
    }

}
