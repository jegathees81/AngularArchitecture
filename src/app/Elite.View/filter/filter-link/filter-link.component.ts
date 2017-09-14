import { Component, OnInit, Input, Inject } from '@angular/core';
import { dispatcher, state, AppState } from "../../../Shared/actions/stateAndDispatcher";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Action, SetVisibilityFilter } from "../../../Shared/actions/actions";

@Component({
  selector: 'app-filter-link',
  templateUrl: './filter-link.component.html',
  styleUrls: ['./filter-link.component.css']
})
export class FilterLinkComponent implements OnInit {
  @Input() public filter: string;
  constructor(@Inject(dispatcher) private dispatcher: Observer<Action>, 
              @Inject(state) private state: Observable<AppState>) { }

  ngOnInit() {
  }
   public get textEffect() { 
    return this.state.map(s => 
      s.visibilityFilter === this.filter ? 'underline' : 'none'); 
  } 

  public setVisibilityFilter() {
    const action: SetVisibilityFilter = new SetVisibilityFilter(this.filter);

    this.dispatcher.next(action); 
  } 

}
