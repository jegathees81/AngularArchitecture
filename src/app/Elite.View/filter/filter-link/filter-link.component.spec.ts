import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLinkComponent } from './filter-link.component';

describe('FilterLinkComponent', () => {
  let component: FilterLinkComponent;
  let fixture: ComponentFixture<FilterLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
