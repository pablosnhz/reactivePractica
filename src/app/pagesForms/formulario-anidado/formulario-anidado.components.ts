import { Component, OnInit } from '@angular/core';

// importamos el reactive para crear el formulario anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidados',
  templateUrl: './formulario-anidado.components.html',
  styleUrls: ['./formulario-anidado.component.css']
})
export class FormularioAnidadoNuevoComponent implements OnInit{

  miFormularioAnidados: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    // agrupacion telefono

    const telefonoFijo = this.formBuilder.group({
      prefijo: '',
      numero: ''
    })

    const telefonoMovil = this.formBuilder.group({
      prefijo: '',
      numero: ''
    })

    // agrupacion del formulario contiene dos agrupaciones
    this.miFormularioAnidados = this.formBuilder.group({
      fijo: telefonoFijo,
      movil: telefonoMovil
    })

    // this.miFormularioAnidados.valueChanges.subscribe(
    //   console.log
    // )
  }
}







// import { Component, OnInit } from '@angular/core';

// // importamos el reactive para crear el formulario anidado
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-formulario-anidados',
//   templateUrl: './formulario-anidado.components.html',
//   styleUrls: ['./formulario-anidado.component.css']
// })
// export class FormularioAnidadoNuevoComponent implements OnInit{

//   miFormularioAnidados: FormGroup = new FormGroup({})

//   constructor(private formBuilder: FormBuilder){}

//   ngOnInit(): void {
//     // agrupacion telefono

//     const telefonoFijo = this.formBuilder.group({
//       prefijo: '',
//       numero: ''
//     })

//     const telefonoMovil = this.formBuilder.group({
//       prefijo: '',
//       numero: ''
//     })

//     // agrupacion del formulario contiene dos agrupaciones
//     this.miFormularioAnidados = this.formBuilder.group({
//       telefonoFijo: telefonoFijo,
//       telefonoMovil: telefonoMovil
//     })
//   }
// }
