import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../../../models/todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      <input type="checkbox" [(ngModel)]="todo.completed" (change)="onToggle()">
      <span [class.completed]="todo.completed">{{ todo.title }}</span>
      <button (click)="onDelete()">Excluir</button>
    </div>
  `,
  styles: [`
    .todo-item {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }

    .completed {
      text-decoration: line-through;
      color: #999;
    }
  `],
  standalone: true,
  imports: [FormsModule]
})
export class TodoItemComponent {
  @Input()
  todo!: TodoModel;
  @Output() delete = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }

  onToggle() {
    this.toggle.emit();
  }
}