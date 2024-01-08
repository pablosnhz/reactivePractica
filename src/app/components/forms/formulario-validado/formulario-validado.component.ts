import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit{

  miFormularioValidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.miFormularioValidado = this.formBuilder.group({
      // campo obligatorio
      nombre: ['', Validators.required],
      apellidos: '',
      // campo obligatorio con valores minimos y maximos
      edad: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      // campo obligatorio y de tipo email
      email: ['', Validators.compose([Validators.required, Validators.email])],
      // campo obligatorio y con expresion regular
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      // campo booleano con true como obligatorio
      acepta: [false, Validators.requiredTrue]
    })
  }

  get nombre(){
    return this.miFormularioValidado.get('nombre');
  }
  get apellido(){
    return this.miFormularioValidado.get('apellidos');
  }
  get edad(){
    return this.miFormularioValidado.get('edad');
  }
  get email(){
    return this.miFormularioValidado.get('email');
  }
  get password(){
    return this.miFormularioValidado.get('password');
  }
  get acepta(){
    return this.miFormularioValidado.get('acepta');
  }

  // metodo de SUBMIT del formulario
  enviarFormulario(){
    // controlar que el formulario sea valido, si es valido entonces...
    if(this.miFormularioValidado.valid){
      console.log(this.miFormularioValidado.value);
      // resetear los campos del formulario
      this.miFormularioValidado.reset();
    }
  }

}
