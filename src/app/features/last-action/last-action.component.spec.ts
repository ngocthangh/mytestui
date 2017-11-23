import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastActionComponent } from './last-action.component';

describe('LastActionComponent', () => {
  let component: LastActionComponent;
  let fixture: ComponentFixture<LastActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
