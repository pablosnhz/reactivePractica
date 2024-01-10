import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formularionew-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.css']
})
export class FormularioArrayNuevoComponent implements OnInit{

  miFormularioArrays: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.miFormularioArrays = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      // inicializamos la lista de telefonos vacia
      telefonos: this.formBuilder.array([])
    })
  }

  // metodo getter para obtener el formArray de la lista de telefonos
  get telefonosFormulario(): FormArray{
    return this.miFormularioArrays.get('telefonos') as FormArray;
  }

  // metodo para anadir telefonos a la lista
  anadirTelefono(){
  // creamos un grupo telefono
  const telefonoNuevo = this.formBuilder.group({
    prefijo: '',
    numero: ''
  })
  // anadimos el grupo a la lista de telefonos
  this.telefonosFormulario.push(telefonoNuevo);
  }
  // metodo para eliminar telefonos de la lista
  eliminarTelefono(index: number){
    this.telefonosFormulario.removeAt(index)
  }



}
