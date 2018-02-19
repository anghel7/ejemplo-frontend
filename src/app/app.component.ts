import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { User } from './shared/model/user';

@Component({
  selector: 'sky-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sky';
  users: User[];

  constructor(private userService: UserService) {
    console.log('testt');
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((result) => {
        console.log(result);
      });
  }
}
