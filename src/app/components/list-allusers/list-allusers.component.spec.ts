import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllusersComponent } from './list-allusers.component';

describe('ListAllusersComponent', () => {
  let component: ListAllusersComponent;
  let fixture: ComponentFixture<ListAllusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
