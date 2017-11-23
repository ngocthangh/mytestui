import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborativeFilteringComponent } from './collaborative-filtering.component';

describe('CollaborativeFilteringComponent', () => {
  let component: CollaborativeFilteringComponent;
  let fixture: ComponentFixture<CollaborativeFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborativeFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborativeFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
