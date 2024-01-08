import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private AuthService: AuthService){

  }

  listUser: any;
  filtroNombre: string = '';



  searchCharacters(): void {
    // Llama al servicio para obtener la lista filtrada de personajes según el filtroNombre
    this.AuthService.searchCharacters(this.filtroNombre).subscribe(
      (data) => {
        this.listUser = data.results;
      }
    );
  }

  ngOnInit(): void {
    this.AuthService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) => {
        console.log('Respuesta login', response)
        // luego de ver que responde y trae el token, todo OK
        sessionStorage.setItem('token', response.token);
      },
      (error) => console.error(`Ha ocurrido un error en el proceso de login: ${error}`),
      ()=> console.log(`Se ha completado el llamado de login a REQRES`))
  }
}
