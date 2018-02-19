import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const USERS_API = 'http://localhost:3000/users';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get(USERS_API);
  }
}
