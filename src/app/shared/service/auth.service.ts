import { User } from "../model/user.model";


export class AuthService {
    private isLogin = false;

    public login(user: User) {
        this.isLogin = true;
        window.localStorage.setItem('user', JSON.stringify(user))
    }

    public logout() {
        this.isLogin = false;
        window.localStorage.clear();
    }
}