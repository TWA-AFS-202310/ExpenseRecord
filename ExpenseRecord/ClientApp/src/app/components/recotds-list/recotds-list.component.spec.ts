import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsListComponent } from './recotds-list.component';

describe('RecotdsListComponent', () => {
  let component: RecordsListComponent;
  let fixture: ComponentFixture<RecordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
