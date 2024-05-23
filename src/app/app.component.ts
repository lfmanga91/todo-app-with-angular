import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./shared/components/todos/todo-list/todo-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    imports: [RouterOutlet, TodoListComponent]
})
export class AppComponent {
  title = 'todo-app';
}
