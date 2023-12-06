import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Tarea } from 'src/app/domain/Tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-view-tarea',
  templateUrl: './view-tarea.component.html',
  styleUrls: ['./view-tarea.component.scss']
})
export class ViewTareaComponent {

  tarea: Tarea = new Tarea();

  constructor( private router: Router,
               private route: ActivatedRoute,
               private tareaFirebaseService: TareasFirebaseService){

    this.route.params.subscribe(params => {
      console.log(params)
      if(params['id']){
        this.loadTarea(params['id'])
      }
    })
    
  }

  loadTarea(uid: string){
    this.tareaFirebaseService.getTarea(uid).subscribe(data => {
      console.log(data)
      this.tarea = <any> data
    })
  }

  borrarTarea(){
    this.tareaFirebaseService.delete(this.tarea);
    this.router.navigate(['paginas/lista-tarea']);
  }

  editarTarea(){

    let params: NavigationExtras = {
      queryParams: {
        tarea: this.tarea
      }
    }

    this.router.navigate(['paginas/editar-tarea'], params)
  }

}
