import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {

  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.miFormularioArray = this.formBuilder.group(
      {
        nombre: '',
        apellidos: '',
        // inicializamos la lista de telefonos vacia.
        telefonos: this.formBuilder.array([])
      })
    }
    // metodo get getter para obtener el FormArrary de la lista de telefonos
    get telefonosFormulario(): FormArray{
      return this.miFormularioArray.get('telefonos') as FormArray
    }

    // metodo para anadir telefonos a la lista
    anadirTelefono(){
      // creamos un grupo telefono
      const telefono = this.formBuilder.group({
        prefijo: '',
        numero: ''
      })
      this.telefonosFormulario.push(telefono);
    }

    // metodo para eliminar telefonos de la lista
    eliminarTelefono(index: number){
      this.telefonosFormulario.removeAt(index);
    }
}
