import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user.model';
import { UserService } from '../../shared/service/user.service';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'sp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [{ email: "ho" }];

  constructor(
    private store:Store<User>,
    private userService: UserService
  ) { }

  ngOnInit() {
    let countd = this.store.pipe(select('user'));
    countd.subscribe((data) => console.log(data))

    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.info(error);
      }
    )
  }

}
