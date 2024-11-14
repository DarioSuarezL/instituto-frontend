import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

export interface UserCreateResponse {
  crearUsuario: CrearUsuario;
}

export interface CrearUsuario {
  id:       string;
  username: string;
  roles:    Role[];
}

export interface Role {
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserCreateService extends Mutation {

  document = gql`
  mutation crearUsuario($username: String!, $password: String!, $roles: [String!]!) {
    crearUsuario(username: $username, password: $password, roles: $roles) {
      id
      username
      roles {
        nombre
      }
    }
  }
`;

}