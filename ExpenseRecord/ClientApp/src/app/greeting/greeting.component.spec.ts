import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { FormsModule } from '@angular/forms';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        { provide: 'BASE_URL', useValue: 'BASE_URL' }
      ],
      declarations: [ GreetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call callApi when greet', () => {
  //   component.name = "Bob";
  //   const callApi = spyOn(component, "callApi");

  //   component.greet();

  //   expect(callApi).toHaveBeenCalledWith("Bob");
  // });
});
