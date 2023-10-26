import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeletionComponent } from './task-deletion.component';

describe('TaskDeletionComponent', () => {
  let component: TaskDeletionComponent;
  let fixture: ComponentFixture<TaskDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDeletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
