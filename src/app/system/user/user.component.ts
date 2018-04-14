import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user.model';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'sp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [{ token: "ho" }, { token: "blo" }];
  constructor(private userService: UserService) { }

  ngOnInit() {
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
