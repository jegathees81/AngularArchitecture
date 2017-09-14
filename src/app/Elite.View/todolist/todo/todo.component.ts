import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AppState, state } from "../../../Shared/actions/stateAndDispatcher";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() text: string;
  @Input() completed: boolean;
  @Input() id: number;
  @Output() toggle = new EventEmitter();
 
  constructor(@Inject(state) private state: Observable<AppState>) { }

  ngOnInit() {
  }
  public clicked(): void {
    this.toggle.emit({ id: this.id });
  }
}
