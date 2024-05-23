import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo-list',
    template: `
    <input type="text" [(ngModel)]="newTodoTitle" placeholder="Nova tarefa">
    <button (click)="addTodo()">Adicionar</button>

    <div *ngFor="let todo of todos; let i = index">
      <app-todo-item [todo]="todo" (delete)="deleteTodo(i)" (toggle)="toggleTodo(i)"></app-todo-item>
    </div>
  `,
    styles: [`
    /* Estilos para o componente todo-list */
  `],
    standalone: true,
    imports: [CommonModule, FormsModule, TodoItemComponent]
})
export class TodoListComponent {
  todos = [
    { title: 'Tarefa 1', completed: false },
    { title: 'Tarefa 2', completed: true },
    // ... mais tarefas
  ];
  newTodoTitle = '';

  addTodo() {
    this.todos.push({ title: this.newTodoTitle, completed: false });
    this.newTodoTitle = '';
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
