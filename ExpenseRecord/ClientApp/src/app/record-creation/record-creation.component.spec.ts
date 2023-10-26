import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCreationComponent } from './record-creation.component';

describe('RecordCreationComponent', () => {
  let component: RecordCreationComponent;
  let fixture: ComponentFixture<RecordCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
