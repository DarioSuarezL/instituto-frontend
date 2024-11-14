import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

export interface LoginResponse {
  login: {
    token: string;
    user: {
      id: string;
      username: string;
      roles: Array<{
          nombre: string;
          permisos: Array<{
              nombre: string;
            }>
        }>
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginService extends Mutation {

  document = gql`
    mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        user {
          id
          username
          roles {
            nombre
            permisos {
              nombre
            }
          }
        }
      }
    }`;

}
