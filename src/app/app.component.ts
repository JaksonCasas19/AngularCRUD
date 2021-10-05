import { Component } from '@angular/core';
import {Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  employeeArray:Employee[] = [
    {id:1, name:"Jakson", country:"Perú"},
    {id:2, name:"Lucas", country:"Alemania"}
  ];

  //Metodo para listar
  
}
