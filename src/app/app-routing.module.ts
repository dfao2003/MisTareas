import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { TareaComponent } from './pages/tarea/tarea.component';
import { ListaTareaComponent } from './pages/lista-tarea/lista-tarea.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ViewTareaComponent } from './pages/view-tarea/view-tarea.component';
import { EditarTareaComponent } from './pages/editar-tarea/editar-tarea.component';


const routes: Routes = [
  {path: 'paginas/inicio', component: InicioComponent},
  {path: 'paginas/acercade', component: AcercadeComponent },
  {path: 'paginas/tarea', component: TareaComponent},
  {path: 'paginas/lista-tarea', component: ListaTareaComponent},
  {path: 'paginas/editar-tarea', component: EditarTareaComponent},
  {path: 'paginas/tarea/:id' , component: ViewTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
