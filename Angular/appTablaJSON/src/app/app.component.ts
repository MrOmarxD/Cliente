import { Component } from '@angular/core';
import listadePostres from'src/assets/json/postres.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  // Exporto los datos del archivo JSON a la vista
  Postres: any = listadePostres;
  title = 'appTablaJSON';
}
