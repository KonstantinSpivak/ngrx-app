import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService {
    constructor() { }

    getUrl() {
        return 'http://127.0.0.1:3000';
    }
}