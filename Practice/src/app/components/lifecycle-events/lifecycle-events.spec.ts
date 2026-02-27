import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleEvents } from './lifecycle-events';

describe('LifecycleEvents', () => {
  let component: LifecycleEvents;
  let fixture: ComponentFixture<LifecycleEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
