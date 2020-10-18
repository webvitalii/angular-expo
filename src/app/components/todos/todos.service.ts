import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

export interface TodoInterface {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosApiUrl = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<TodoInterface[]> {
    const customOptions = {
      headers: new HttpHeaders({
        myCustomHeader: 'Custom value'
      }),
      params: new HttpParams().set('_limit', '3') // same as https://jsonplaceholder.typicode.com/todos/?_limit=3
    };
    return this.http.get<TodoInterface[]>(this.todosApiUrl, customOptions)
      .pipe(delay(2000)); // added delay to show loading block
  }

  addTodo(todoObj: TodoInterface): Observable<TodoInterface> {
    return this.http.post<TodoInterface>(this.todosApiUrl, todoObj);
  }

  removeTodo(todoId: number): Observable<any> {
    return this.http.delete<void>(`${this.todosApiUrl}${todoId}`);
  }

  completeTodo(todoId: number): Observable<TodoInterface> {
    const todoUpdate = {
      completed: true
    };
    return this.http.put<TodoInterface>(`${this.todosApiUrl}${todoId}`, todoUpdate)
      .pipe(
        catchError(error => {
          console.log('Error from TodosService: ', error.message);
          return throwError(error);
        })
      );
  }
}
