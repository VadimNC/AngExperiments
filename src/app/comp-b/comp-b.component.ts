import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  @Input('name-compB') name2;
  @Input('array-compB') userList2: Array<any>;
  @Output('selectedMyUserId') selectedMyUserWithoutId: EventEmitter<any> = new EventEmitter();
  selectUser() {
    this.selectedMyUserWithoutId.emit();
  }
  constructor() {
  }

  ngOnInit() {
  }



}
