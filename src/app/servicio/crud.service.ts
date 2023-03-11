import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { Empleado } from './Empleado';



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='';
  constructor(private clienteHttp:HttpClient) { }
//Insertar datos en api
AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);

}



}
