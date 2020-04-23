import { Injectable } from '@angular/core';
import {User} from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  constructor() { }
  public add(user: User) {this.users.push(user); }
  // tslint:disable-next-line:max-line-length
  public update(user: User) {
    const index = this.users.findIndex(current => current.username = user.username);
    this.users[index] = Object.assign(new User('', '', '', '', '', ''), user) ; }
  public delete(user: User) {}
}
