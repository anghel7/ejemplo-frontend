import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { User } from '../shared/model/user'
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'sky-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  displayedColumns = ['name', 'lastname', 'username', 'email', 'options'];

  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((result) => {
        this.dataSource = new MatTableDataSource(result.data);
        this.ngAfterViewInit();
      });
  }
}
