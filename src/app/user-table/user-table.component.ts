import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { User } from '../shared/model/user'

@Component({
  selector: 'sky-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  displayedColumns = ['name', 'lastname', 'username', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor() { }

  ngOnInit() {
  }

}

const ELEMENT_DATA: User[] = [
  { _id: '1', name: 'Angel', lastname: 'Antezana', username: 'anghel7', email: 'anghel@gmail.com', avatar: 'no hay avatar', type: 'USER' },
  { _id: '2', name: 'Laura', lastname: 'Vazques', username: 'laur123', email: 'laura@gmail.com', avatar: 'no hay avatar', type: 'USER' },
];
