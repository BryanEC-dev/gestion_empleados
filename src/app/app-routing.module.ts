import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';

const routes: Routes = [
  {path: 'empleados', component:ListaEmpleadosComponent},
  {path: 'registrar-empleado', component:RegistrarEmpleadoComponent},
  {path: '', redirectTo:'empleados', pathMatch:'full'},
  {path: 'empleado-detalle/:id', component: EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
