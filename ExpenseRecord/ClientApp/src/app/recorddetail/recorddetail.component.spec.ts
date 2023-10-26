import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorddetailComponent } from './recorddetail.component';

describe('RecorddetailComponent', () => {
  let component: RecorddetailComponent;
  let fixture: ComponentFixture<RecorddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecorddetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecorddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
