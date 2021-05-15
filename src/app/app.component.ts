import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  success_msg = false

  contacts = [
    {
      'firstName': 'Nazar',
      'lastName': 'Vasylyshun',
      'age': 23
    },
    {
      'firstName': 'Tetyana',
      'lastName': 'Gushka',
      'age': 24
    },
    {
      'firstName': 'Ivan',
      'lastName': 'Bobko',
      'age': 25
    },
    {
      'firstName': 'Ivan',
      'lastName': 'Bobko',
      'age': 25
    },
    {
      'firstName': 'Ivan',
      'lastName': 'Bobko',
      'age': 25
    },
    {
      'firstName': 'Ivan',
      'lastName': 'Bobko',
      'age': 25
    },
  ]

  names = ['ivan','igor','max','zenyo', 'pavlo', 'misha']



}
