import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'sp-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/login'])
  }

}
