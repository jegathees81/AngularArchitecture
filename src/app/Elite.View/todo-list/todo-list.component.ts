import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { ITodo } from "../../Elite.Model/todo";
import { IAppState } from "../../Elite.ModelView/Store";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../../Elite.ModelView/actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false 
  };
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }
  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }
  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id });
  }

}
