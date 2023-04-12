import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseUrl = 'http://localhost:8080/api/v1/empleados';
  
  constructor( private httpClient: HttpClient) { }

  
  obtenerListaEmpleados() : Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`)
    
  }

  registrarEmpleado(empleado : Empleado) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, empleado);
  }

   eliminarEmpleado(id:number) : Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  obtenerEmpleadoPorId(id:number) : Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`)
  }


  

}
