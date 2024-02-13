import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  private usersService = inject(UsersService);
}
