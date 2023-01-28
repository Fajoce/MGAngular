import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedContactComponent } from './received-contact.component';

describe('ReceivedContactComponent', () => {
  let component: ReceivedContactComponent;
  let fixture: ComponentFixture<ReceivedContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivedContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
