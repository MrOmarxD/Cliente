import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
[x: string]: any;
  title = 'app-Formulario';

  forma!: FormGroup;

  constructor(private fb:FormBuilder) {
    this.crearFormulario();
    this.cargarDataAlFormulario();
  } 
  cargarDataAlFormulario() {
    this.forma.reset({
      nombre: 'Omar',
      apellido: 'Eiyana',
      correo: 'omareiyana@gmail.com'
    });
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      correo: [
        '', 
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      ],
      direccion: this.fb.group({
        poblacion: ['', Validators.required],
        provincia: ['', Validators.required]
    }),
    pasatiempos: this.fb.array([])
  });
  }

  guardar() {
    console.log(this.forma);

    if(this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        if(control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) => 
            control.markAllAsTouched()
          );
        }else {
          control.markAllAsTouched();
        }
        
      });
      this.forma.reset();
    }
  }

  
  get nombreNoValido() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }
  get apellidoNoValido() {
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
  }
  get correoNoValido() {
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched
  }
  get pass1NoValido() {
    return this.forma.get('pass1')?.invalid && this.forma.get('pass1')?.touched
  }
  get pass2NoValido() {
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;
    return ( pass1 == pass2 ) ? false : true;
  }
  get poblacionNoValido() {
    return this.forma.get('direccion.poblacion')?.invalid && this.forma.get('direccion.poblacion')?.touched
  }
  get provinciaNoValido() {
    return this.forma.get('direccion.provincia')?.invalid && this.forma.get('direccion.provincia')?.touched
  }
  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }
  agregarPasatiempos() {
    this.pasatiempos.push(this.fb.control(''));
  }
  borrarPasatiempos(i: number) {
    this.pasatiempos.removeAt(i)
  }
}
