
export class LoginService {
    _token: string;

    constructor(){

    }

    public getToken(): string {
        return this._token;
    }

    public setToken(token): void {
        this._token = token;
    }
}