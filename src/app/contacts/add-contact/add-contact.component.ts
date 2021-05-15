import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html', //Or <h1>You can write explicitly</h1>
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {

  }
  ngOnDestroy() {

  }

}
