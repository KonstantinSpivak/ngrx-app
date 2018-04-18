import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../shared/service/user.service';
import { User } from '../../shared/model/user.model';
import { Message } from '../../shared/model/message.model';
import { AuthService } from '../../shared/service/auth.service';
import { Store } from '@ngrx/store';
import { AuthLogin } from '../redux/auth.actions';

interface AppStore {
  user: {};
}

@Component({
  selector: 'sp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  form: FormGroup;
  public message: Message;

  constructor(private store: Store<AppStore>, private UserService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.message = new Message('', '');
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit() {
    const formData = this.form.value;

    this.store.dispatch(new AuthLogin(formData));
    this.UserService.auth(formData.email, formData.password)
      .subscribe((user: User) => {
        this.showMessage('Login', 'success');
        this.authService.login(user);
        console.log(user)
      }, (error) => {
        this.showMessage(error, 'danger');
        console.log(error)
      });

  }

  private showMessage(text: string = '', type: string = 'danger', time = 5000) {
    this.message = new Message(text, type);
    window.setTimeout(() => {
      this.message.text = '';
    }, time);
  }

}
