import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
  currentUsername = '';

  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log(id);
    this.currentUsername =
      this.users[this.users.findIndex((user) => user.id === id)].name;
    console.log(this.currentUsername);
  }
}
