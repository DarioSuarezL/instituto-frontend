import { Component, OnInit } from '@angular/core';
import { UsersListService, Usuario } from './graphql/users-list.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usersListService: UsersListService) { }

  ngOnInit(): void {
    this.usersListService.fetch(
      { },
      {
        context: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      }
    ).subscribe(({data}) => {
      this.usuarios = data.usuarios;
    });
    
  }

}
