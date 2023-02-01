import { Component } from "@angular/core";
import ciudades from 'src/assets/json/ciudades.json';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  json: any = ciudades;

  paises: string[] = [];
  provincias: string[] = [];
  ciudades: string[] = [];
  vaciarCiudades: boolean = false;

  ngOnInit(): void {
    const paises: string[] = [];
    this.json.forEach((elemento: any) => {
      if(!paises.includes(elemento.pais)){
        paises.push(elemento.pais);
      }
    });
    this.paises = paises; 
  }
  
  obtenerProvincias() {
    const provincias: string[] = [];
    const pais = document.querySelector('.pais') as any;
    
    this.json.forEach((elemento: any) => {
      if(!provincias.includes(elemento.provincia) && elemento.pais == pais.value){
        provincias.push(elemento.provincia);
      }
    });
    this.provincias = provincias;
    this.vaciarCiudades = true;
    this.eliminarMensaje();
    this.obtenerCiudades();
  }

  obtenerCiudades() {
    const ciudades: string[] = [];
    const provincia = document.querySelector('.provincia') as any;
    
    if(!this.vaciarCiudades){
      this.json.forEach((elemento: any) => {
        
        if(!ciudades.includes(elemento.ciudad) && elemento.provincia == provincia.value){
          ciudades.push(elemento.ciudad);
        }
      });
    }
    this.ciudades = ciudades;
    this.eliminarMensaje();
    this.vaciarCiudades = false;
  }

  mostrarMensaje() {
    const pais = document.querySelector('.pais') as any;
    const provincia = document.querySelector('.provincia') as any;
    const ciudad = document.querySelector('.ciudad') as any;
    const mensaje = document.querySelector('.mensaje') as any;
    mensaje.innerHTML=  `<p>Has nacido en <b>${pais.value}</b>, provincia/estado de <b>${provincia.value}</b>, en la ciudad de <b>${ciudad.value}</b></p>`;
  }

  eliminarMensaje(){
    const mensaje = document.querySelector('.mensaje') as any;
    if(mensaje != null){
      mensaje.innerHTML = "";
    }
  }
}
