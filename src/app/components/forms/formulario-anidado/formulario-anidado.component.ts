import { Component, OnInit } from '@angular/core';

// importamos reactive forms, para crear formulario anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit{

  miFormularioAnidado: FormGroup = new FormGroup({});

  constructor(private FormBuilder: FormBuilder){}

  ngOnInit(): void {

    const telefonoFijo = this.FormBuilder.group(
      {
        prefijo: '',
        numero: '',
      }
    )

    const telefonoMovil = this.FormBuilder.group(
      {
        prefijo: '',
        numero: '',
      }
    )

    // agrupacion del formulario que contiene dos agrupaciones
    this.miFormularioAnidado = this.FormBuilder.group(
      {
        telefonoFijo: telefonoFijo,
        telefonoMovil: telefonoMovil
      }
    )

  }
}
