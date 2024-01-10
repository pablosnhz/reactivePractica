import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularionew-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.css']
})
export class FormularioValidadoNuevoComponent implements OnInit{

  miFormularioValidados: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.miFormularioValidados = this.formBuilder.group({
      // campo obligatorio
      nombre: ['', Validators.required],
      apellidos: '',
      // campo obligatorios con valores min y maxs
      edad: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      // campo obligatorio tipo email
      email: ['', Validators.compose([Validators.required, Validators.email])],
      //campo obligatorio con expresion regular
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      // campo booleano, true como obligatorio
      acepta: [false, Validators.requiredTrue]
    })
  }

  // generamos esto get para obtener los required, los min, max y diversas instancias
  get nombre(){
    return this.miFormularioValidados.get('nombre');
  }
  get apellido(){
    return this.miFormularioValidados.get('apellidos');
  }
  get edad(){
    return this.miFormularioValidados.get('edad');
  }
  get email(){
    return this.miFormularioValidados.get('email');
  }
  get password(){
    return this.miFormularioValidados.get('password');
  }
  get acepta(){
    return this.miFormularioValidados.get('acepta');
  }

  // metodo de submit del formulario
  enviarFormulario(){
    // controlar que el formulario sea valido
    if(this.miFormularioValidados.valid){
      console.table(this.miFormularioValidados.value);

      // si es valido, resetear campos del formularios
      this.miFormularioValidados.reset();
    }
  }


}
