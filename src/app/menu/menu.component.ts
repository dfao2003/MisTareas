import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  paginas = [
    {path: 'paginas/inicio', title:'Inicio'},
    {path: 'paginas/acercade', title: 'Acerca de nosotros'},
    {path: 'paginas/tarea', title: 'Agregar Tareas'},
    {path: 'paginas/lista-tarea', title: 'Listado de Tareas'}
  ];
}
