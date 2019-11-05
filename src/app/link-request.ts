export enum RequestStatus {
    Waiting = 0,
    Approved = 1,
    Declined = 2
}

export interface LinkRequest {
    from: number;
    to: number;
    status: RequestStatus;
}
