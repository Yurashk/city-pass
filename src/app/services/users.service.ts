import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  heroes: Users[] = [];

  constructor() {
  }

  getHeroes() {
    return UsersList;
  }
}

export class Users {
  id: string;
  name: string;
  birthday: string;
  gender: string;
  password: string;
  orderId: number;
}

export const UsersList: Users[] = [
  {id: 'dok', name: 'Alexander Dubok', birthday: '26.12.1997', gender: 'M', password: 'dok2717', orderId: 3729566},
  {id: 'sweetAss', name: 'Sirenko Vladyslav', birthday: '22.01.1998', gender: 'M', password: 'sweetAss2717', orderId: 3729525},
  {id: 'rujulya', name: 'Yurii Hiienko', birthday: '01.01.1998', gender: 'M', password: 'rujulya2717', orderId: 3729575},
  {id: 'generator', name: 'Name Surname', birthday: '00.00.2000', gender: 'M', password: 'generator2717', orderId: 3729575},
  {id: 'bob', name: 'Bober Volodymyr', birthday: '25.07.2002', gender: 'M', password: 'bob2717', orderId: 3729578},
  {id: 'dokBatya', name: 'Alexander Dubok', birthday: '11.07.1965', gender: 'M', password: 'dokBatya2717', orderId: 3729566},
  {id: 'sonik', name: 'Yaroslavtseva Sofiia', birthday: '04.12.2000', gender: 'W', password: 'sonik2717', orderId: 3729588},
  {id: 'rodich', name: 'Radchenko Denys', birthday: '13.06.1997', gender: 'M', password: 'rodich2717', orderId: 3729588},
];
