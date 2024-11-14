import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { gql } from 'apollo-angular';

export interface Usuario{
  id: string;
  username: string;
}

export interface UsersListResponse{
  usuarios: Usuario[];
}

@Injectable({
  providedIn: 'root'
})

export class UsersListService extends Query<UsersListResponse>{

  document = gql`
  query {
    usuarios {
      id
      username
    }
  }`;

}
