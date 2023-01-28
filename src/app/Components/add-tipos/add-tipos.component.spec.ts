import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTiposComponent } from './add-tipos.component';

describe('AddTiposComponent', () => {
  let component: AddTiposComponent;
  let fixture: ComponentFixture<AddTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
