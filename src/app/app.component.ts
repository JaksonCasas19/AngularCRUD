import { Component } from '@angular/core';
import {Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee CRUD';
  employeeArray:Employee[] = [
    {id:1, name:"Jakson", country:"Perú"},
    {id:2, name:"Lucas", country:"Alemania"}
  ];

  //Metodo para listar
  selectedEmployee:Employee = new Employee();

  openForEdit(employee:Employee){
    this.selectedEmployee = employee;
  }

  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1; //Para Icrementar el id de manera automatica
      this.employeeArray.push(this.selectedEmployee); //Para crear 
    }
    this.selectedEmployee = new Employee(); //Para limpiar los datos
  }

  delete(){
    /*Por cada elemento que recorra vamos hacer lo siguiente, si cada elemento es distinto al empleado
    Entonces lo va dejar tal cual*/
    this.employeeArray = this.employeeArray.filter(x => x!= this.selectedEmployee);
    this.selectedEmployee = new Employee();
  }
}
