import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'sp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() users: User[];
  constructor() { }

  ngOnInit() {
    console.log('list', this.users)
  }

}
