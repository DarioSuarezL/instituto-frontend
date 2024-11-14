import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

export interface Rol{
  id: string,
  nombre: string
}

export interface RoleListResponse{
  roles: Rol[]
}

@Injectable({
  providedIn: 'root'
})
export class RolesListService extends Query<RoleListResponse> {

  document = gql`
  query {
    roles {
      id
      nombre
    }
  }
  `

}
