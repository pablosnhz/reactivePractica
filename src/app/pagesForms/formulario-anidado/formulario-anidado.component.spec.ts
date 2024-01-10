import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnidadoNuevoComponent } from './formulario-anidado.components';

describe('FormularioAnidadoComponent', () => {
  let component: FormularioAnidadoNuevoComponent;
  let fixture: ComponentFixture<FormularioAnidadoNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAnidadoNuevoComponent]
    });
    fixture = TestBed.createComponent(FormularioAnidadoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
