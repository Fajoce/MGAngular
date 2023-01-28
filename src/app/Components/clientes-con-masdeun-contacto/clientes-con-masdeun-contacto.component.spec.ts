import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesConMasdeunContactoComponent } from './clientes-con-masdeun-contacto.component';

describe('ClientesConMasdeunContactoComponent', () => {
  let component: ClientesConMasdeunContactoComponent;
  let fixture: ComponentFixture<ClientesConMasdeunContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesConMasdeunContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesConMasdeunContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
