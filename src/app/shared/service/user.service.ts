import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { User } from "../model/user.model"
import { Observable } from "rxjs/Observable";
import { error } from "util";



@Injectable()
export class UserService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    auth(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${this.config.getUrl()}/auth`, { email, password })
            .catch(this.errorFunction(error));
    }

    getUsers(start: number = 1, end: number = start + 10, sort: {} = {}) {
        return this.http.get(`${this.config.getUrl()}/api/users?start=${start}&end=${end}`)
            .catch(this.errorFunction(error));
    }

    errorFunction(error) {
        return error => {
            if (error.error.message) {
                return Observable.throw(error.error.message);
            }
            return Observable.throw('some error');
        };

    }
}