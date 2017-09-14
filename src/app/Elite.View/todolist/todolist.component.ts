import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { dispatcher, state, AppState, ToDoItem } from "../../Shared/actions/stateAndDispatcher";
import { Observer } from "rxjs/Observer";
import { Action, ToggleTodoAction } from "../../Shared/actions/actions";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
 
  constructor(@Inject(state) private state: Observable<AppState>,
                @Inject(dispatcher) private dispatcher: Observer<Action>) { }

  ngOnInit() {
  }
  
   public get filtered() {
        return this.state.map(s => this.getVisibleTodos(s.todos, s.visibilityFilter));
    }

    public emitToggle(data) {
        const action: ToggleTodoAction = new ToggleTodoAction(data.id);
        this.dispatcher.next(action);
    }

    private getVisibleTodos(todoList: Array<ToDoItem>, visibilityFilter: string): Array<ToDoItem> {
        let items = [];
        todoList.forEach(item => {
            let ok: boolean = false;
            switch (visibilityFilter) {
                case 'SHOW_ALL':
                    ok = true;
                    break;
                case 'SHOW_ACTIVE':
                    ok = item.completed === false;
                    break;
                case 'SHOW_COMPLETED':
                    ok = item.completed === true;
                    break;
                default:
                    ok = false;
            }

            if (ok) {
                items.push(item);
            }
        });

        return items;
    }

}
