import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  datos: any[] = [];

  ngOnInit(){
    localStorage.clear();
  }

  obtenerDatos(){
    let titulo = document.querySelector('#titulo') as any;
    let descripcion = document.querySelector('#descripcion') as any;
    this.datos.push({titulo: titulo.value, descripcion: descripcion.value}); 
    localStorage.setItem('datos', JSON.stringify(this.datos));
    this.datos = JSON.parse(localStorage.getItem('datos') as any);
    titulo.value = "";
    descripcion.value = "";
  }

  eliminarDato(dato: any) {
    if(confirm('Está seguro de borrar el registro?')){
      this.datos.splice(dato, 1);
      localStorage.setItem('datos', JSON.stringify(this.datos));
    }
  }
}
