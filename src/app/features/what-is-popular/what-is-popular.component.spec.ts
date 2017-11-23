import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsPopularComponent } from './what-is-popular.component';

describe('WhatIsPopularComponent', () => {
  let component: WhatIsPopularComponent;
  let fixture: ComponentFixture<WhatIsPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
