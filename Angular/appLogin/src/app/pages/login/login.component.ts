import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor() { }

  ngOnInit() {
  }

  // Formulario válido

  // Email válido

  // Contraseña de minimo 6 caracteres

  login(form: NgForm){
    if(form.invalid) { return; }

    console.log(this.usuario);
    console.log(form);
  }

}
