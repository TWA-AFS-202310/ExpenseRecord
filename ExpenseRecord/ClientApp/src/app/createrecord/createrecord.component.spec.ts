import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterecordComponent } from './createrecord.component';

describe('CreaterecordComponent', () => {
  let component: CreaterecordComponent;
  let fixture: ComponentFixture<CreaterecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaterecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
