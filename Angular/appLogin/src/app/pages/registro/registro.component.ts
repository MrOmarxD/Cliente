import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

    this.usuario.email = 'omareiyana@gmail.com';
    this.usuario.nombre = 'Omar Eiyana';
    this.usuario.password = '123456';
  }

  onSubmit(form: NgForm){

    if( form.invalid){return; } // Formulario inválido no hace nada
    console.log('Formulario enviado');
    console.log(this.usuario);
    console.log(form);
  }
}