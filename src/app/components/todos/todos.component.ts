import { Component, OnInit } from '@angular/core';
import { TodoInterface, TodosService } from './todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoList: TodoInterface[];
  todoTitle = '';
  loading = false;
  error = '';


  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(todos => {
        console.log('Todos api response', todos);
        this.todoList = todos;
        this.loading = false;
      });
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return false;
    }
    const newTodo: TodoInterface = {
      title: this.todoTitle,
      completed: false
    };
    this.todosService.addTodo(newTodo)
      .subscribe(todoResponse => {
        this.todoList.push(todoResponse);
        this.todoTitle = '';
      });
  }

  removeTodo(todoId: number) {
    this.todosService.removeTodo(todoId)
      .subscribe( () => {
        this.todoList = this.todoList.filter((todo) => todo.id !== todoId);
      });
  }

  completeTodo(todoId: number) {
    this.todosService.completeTodo(todoId)
      .subscribe(todoResponse => {
        const todoUpdated = this.todoList.find(todo => todo.id === todoResponse.id);
        todoUpdated.completed = true;
      }, error => {
        console.log('Error from TodosComponent:', error);
        this.error = error.message;
      });
  }
}
