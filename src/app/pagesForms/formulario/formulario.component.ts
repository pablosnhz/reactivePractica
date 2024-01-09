import { Component, OnInit } from '@angular/core';

// ejemplo basico de formulario
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-nuevo',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioNuevoComponent implements OnInit{

  // definimos el formulario
  misFormulario: FormGroup = new FormGroup({});

  // inyectamos la clase formbuilder para construir el formGroup
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    // iniciamos los campos y sus valores por defecto
    this.misFormulario = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      direccion: ''
    })

    // nos suscribimos a los cambios del formulario y mostrar en consola
    this.misFormulario.valueChanges.subscribe(
      console.log
    );
  }

}
