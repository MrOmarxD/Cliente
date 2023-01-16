import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { infoAPI } from 'src/app/models/infoAPI.model';
import { DataService } from 'src/app/services/dataTableService/data.service';

@Component({
  selector: 'app-database-tabla',
  templateUrl: './database-tabla.component.html',
  styleUrls: ['./database-tabla.component.scss']
})

export class DatabaseTablaComponent {

  displayedColumns: string[] = [
    'API',
    'Description',
    'Link',
    'Category',
    'Cors',
  ];
  dataSource = new MatTableDataSource<infoAPI>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator! = this.paginator;
  }

  constructor(private _entradasServicio:DataService){}

  listar(){
    this._entradasServicio.getEntradas().subscribe(
      response =>{
        console.log(response);
        if(response.count>0){
          this.dataSource.data = response.entries;
        }
      });
  }

}
