import { Component } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent, UserCreateComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
