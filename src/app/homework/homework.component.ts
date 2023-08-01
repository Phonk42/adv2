import { Component } from '@angular/core';

interface IUser {
  login: string;
  password: string;
  email: string;
  idUser: number;
}

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})

export class HomeworkComponent {
  public login = 'input loginName';
  public password = 'input passwordName';
  public email = 'input emailName';
  public addBtn = 'addButton mainButton';
  public helpBtn = 'helpButton mainButton';

  public loginName = '';
  public passwordName = '';
  public emailName = '';
  public userIndex = 0;
  public none = false;

  public users: IUser[] = [];

  addUser(): void {
    let newUser: IUser = {
      login: this.loginName,
      password: this.passwordName,
      email: this.emailName,
      idUser: this.users.length + 1,
    };
    this.users.push(newUser);
    this.loginName = '';
    this.passwordName = '';
    this.emailName = '';
  }

  deleteUser(i: number): void {
    this.users.splice(i, 1);
    this.loginName = '';
    this.passwordName = '';
    this.emailName = '';
    this.none = false;
  }

  editUser(i: number): void {
    this.loginName = this.users[i].login;
    this.passwordName = this.users[i].password;
    this.emailName = this.users[i].email;
    this.userIndex = i;
    this.none = true;
  }

  saveEditUser(): void {
    let editedUser: IUser = {
      login: this.loginName,
      password: this.passwordName,
      email: this.emailName,
      idUser: this.users[this.userIndex].idUser,
    };
    this.none = false;
    this.users[this.userIndex] = editedUser;
    this.loginName = '';
    this.passwordName = '';
    this.emailName = '';
  }
}
