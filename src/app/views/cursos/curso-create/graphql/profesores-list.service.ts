import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

export interface ProfesoresListResponse {
  usuarios: Usuario[];
}

export interface Usuario {
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
export class ProfesoresListService extends Query<ProfesoresListResponse> {

  document = gql`
  query {
    usuarios {
      id
      username
      roles{
        nombre
      }
    }
  }`;
}
