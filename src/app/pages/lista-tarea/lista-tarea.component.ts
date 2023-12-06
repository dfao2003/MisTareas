import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Tarea } from 'src/app/domain/Tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.scss']
})
export class ListaTareaComponent {
  
  tareas:Tarea[] = []

  listaTareas: any

  constructor(
      private router: Router, private tareaFirebaseService: TareasFirebaseService){
      this.listaTareas = tareaFirebaseService.getAll();
  }

  goEditar(tarea: any){
    console.log("editando", tarea)

    let params: NavigationExtras = {
      queryParams: {
        tarea: tarea
      }
    }

    this.router.navigate(['paginas/tarea'], params)
  }
}
