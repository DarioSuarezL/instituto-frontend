import { Component, OnInit } from '@angular/core';
import { RolesListService, Rol } from './graphql/roles-list.service';

@Component({
  selector: 'app-roles-list',
  standalone: true,
  imports: [],
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.css'
})
export class RolesListComponent implements OnInit {
  roles: Rol[] = [];

  constructor(private rolesListService: RolesListService) { }

  ngOnInit(): void {

      this.rolesListService.fetch(
        {},
        {
          context: {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        }
      ).subscribe(({ data }) => {
        this.roles = data.roles;
      });
    
  }
}
