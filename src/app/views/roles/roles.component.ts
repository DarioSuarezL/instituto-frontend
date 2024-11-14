import { Component } from '@angular/core';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolCreateComponent } from './rol-create/rol-create.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [RolesListComponent, RolCreateComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

}
