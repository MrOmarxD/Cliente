import { Component } from '@angular/core';
// Importamos el servicio de traducciones para hacer uso de él
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appMultilingual';
  //Esto es lo que añadimos
  selectedLanguage = 'es';

  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  selectLanguage(lang: string){
    this.translateService.use(lang);
  }
  // Hasta aquí
}
