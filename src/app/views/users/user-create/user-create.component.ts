import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RolesListService, Rol } from '../../roles/roles-list/graphql/roles-list.service';
import { UserCreateService } from './graphql/user-create.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required)
  })

  roles: Rol[] = [];

  constructor(private rolesListService: RolesListService, private userCreateService: UserCreateService) { }

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

  onSubmit(): void {
    const rolAdaptado: String[] = [this.userForm.value.roles!];
    this.userCreateService.mutate({
      username: this.userForm.value.username,
      password: this.userForm.value.password,
      roles: rolAdaptado
    },
      {
        context: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      }).subscribe(({ data }) => {
        console.log(data);
      })
    // console.log(this.userForm.value, rolAdaptado);
  }

}
