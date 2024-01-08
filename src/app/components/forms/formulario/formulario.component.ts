import { Component, OnInit } from '@angular/core';

// ejemplo basico de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  // definimos nuestro formulario
  miFormulario: FormGroup = new FormGroup({});

  // inyectamos la clase FormBuilder para construir el FormGroup
  constructor(private formBuilder: FormBuilder){}


  ngOnInit(): void {
    // iniciamos los campos del formulario y sus valores por defecto
    this.miFormulario = this.formBuilder.group(
      {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: ''
      }
    );

    // nos suscribimos a cambios que ocurran en el formulario y mostramos en consola

      this.miFormulario.valueChanges.subscribe(
        console.log
      )



  }



}
