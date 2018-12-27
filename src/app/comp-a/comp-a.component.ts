import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  public selectedMyUser;
  public user = {name: 'VVVasya'};
  public userList: Array<any> = [
    {name: 'Petya', age: 24},
    {name: 'Alina', age: 18},
    {name: 'Borya', age: 31}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
