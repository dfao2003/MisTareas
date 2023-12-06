import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/domain/Tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.scss']
})
export class EditarTareaComponent {
  tarea: Tarea = new Tarea();

  constructor(  private router: Router,
                private tareaFirebaseService: TareasFirebaseService){
    
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.tarea = params['tarea']
    }
  }

  editarTarea(){
    this.tareaFirebaseService.editar(this.tarea);
    this.router.navigate(['paginas/lista-tarea']);
  }
}
