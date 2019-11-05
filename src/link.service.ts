import { Injectable } from '@angular/core';
import { LinkRequest } from 'src/app/link-request';
import { Link } from 'src/link';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LinkService {

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    public async newLinkRequest(to: string): Promise<void> {
        await this.http.post('/api/requests/new.php', {
            from: this.authService.getUserID(),
            to
        }).toPromise();
    }

    public async getUnansweredLinkRequests(): Promise<LinkRequest[]> {
        return await this.http.post<LinkRequest[]>('/api/requests.php', {
            id: this.authService.getUserID()
        }).toPromise<LinkRequest[]>();
    }

    public async acceptLink(linkID: string): Promise<void> {
        await this.http.post('/api/requests/accept.php', {
            id: linkID
        }).toPromise();
    }

    public async declineLink(linkID: string): Promise<void> {
        await this.http.post('/api/requests/decline.php', {
            id: linkID
        }).toPromise();
    }

    public async getLinks(): Promise<Link[]> {
        return this.http.get<Link[]>('/api/links.php', {
            responseType: 'json'
        }).toPromise<Link[]>();
    }
}
