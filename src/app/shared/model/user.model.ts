export class User {
    constructor(
        public email: string,
        public role?: number,
        public id?: number,
        public token?: string,
    ) { }
}