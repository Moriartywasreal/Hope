import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SheduleInterviewComponent } from './shedule-interview.component';

describe('SheduleInterviewComponent', () => {
  let component: SheduleInterviewComponent;
  let fixture: ComponentFixture<SheduleInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduleInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
