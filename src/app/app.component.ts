/* tslint:disable */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public textFromInput: string | undefined;
  public userNameFromInput: string | undefined;
  public month: any

constructor() {

}

  title = 'my-app';


  username = 'Nazar is amazing';

  lowerCaseExample = 'LOWERCASE PIPE';
  upperCaseExample = 'uppercase pipe';
  datePipe = Date.now();
  jsonPipe = {username: 'OverPa1n', major: 'Angular', experience: '5 day'};
  currencyPipe = 123;
  percentPipe = 0.6767;

  pageHeading = 'Welcome to ARC Tutorials';

  pageCount = 10;

  userObject = {firstName: 'nazar', lastName: 'Vasylyshun'};

  colVal = 2;

  isUserLoggedIn = false;

  imgUrl = 'test.png'

  imgAlt = 'missing image'

  colorP = 'purple'

  sayHello(): void {
    return alert('Hello')
  }


  highlighted(a: number,b: number,c: number): void {
    return console.log('Mouse over', a + b + c)
  }

  inputBox(): void {
    return alert('on Focus')
  }

  showText(event: any) {
    this.textFromInput = event.target.value
  }

  userName(nameFromInp: HTMLInputElement, e: any) {
    e.preventDefault()
    this.userNameFromInput = nameFromInp.value
    nameFromInp.value = ''

  }







  // styleClsProp = 'c3';
  // conditionClass = 'c4';
  // superPower = 'nj';
  // success_msg = false;
  // tax = 40;
  // txtColor = 'red';
  // styleProp = 'red';

  contacts = [
    {
      firstName: 'Nazar',
      lastName: 'Vasylyshun',
      age: 23
    },
    {
      firstName: 'Tetyana',
      lastName: 'Gushka',
      age: 18
    },
    {
      firstName: 'Ivan',
      lastName: 'Bobko',
      age: 28
    },
    {
      firstName: 'Shimer',
      lastName: 'Boyko',
      age: 35
    },
    {
      firstName: 'Chekan',
      lastName: 'Vendor',
      age: 30
    },
    {
      firstName: 'Teiken',
      lastName: 'Bomber',
      age: 42
    },
  ];

  names = ['ivan', 'igor', 'max', 'zenyo', 'pavlo', 'misha'];
  getClsName(): string {
    return 'c3';
  }


}
