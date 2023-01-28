import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginwithComponent } from './beginwith.component';

describe('BeginwithComponent', () => {
  let component: BeginwithComponent;
  let fixture: ComponentFixture<BeginwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginwithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeginwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
