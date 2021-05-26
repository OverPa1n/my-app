import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'This is user component';
  newValue = 'user value';
  constructor() { }

  ngOnInit(): void {
  }
  updateValue(): string {
    return this.newValue = 'New value from function';
  }

}
