import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-lista-que-haceres',
  templateUrl: './lista-que-haceres.component.html',
  styleUrls: ['./lista-que-haceres.component.scss'],
})
export class ListaQueHaceresComponent {
  nuevaTarea: string = '';

  tareas: QueHacer[] = [];

  estaCompletada: boolean = false;

  tareaSeleccionada: QueHacer[] = [];

  constructor(private tareasSecvice: TareasService) {
    // this.tareas = [
    //   { id: 1, titulo: 'Hacer la cama', finalizada: false },
    //   { id: 2, titulo: 'Hacer la casa', finalizada: false },
    // ];
  }

  ngOnInit(): void {
    this.getTareas();
    console.log(this.tareas.length);
  }

  getTareas() {
    this.tareasSecvice.obtenerTareas().subscribe((res) => {
      this.tareas = res;
    });
  }

  agregarTarea(event: any) {
    if (event.keyCode === 13) {
      event.currentTarget.value = '';
      this.tareasSecvice.agregarTarea(this.nuevaTarea).subscribe((res) => {
        if (res) {
          this.getTareas();
        }
      });
    }
  }

  actualizarTarea() {
    let finalizada: boolean = false;

    this.tareaSeleccionada.forEach((tarea) => {
      if (tarea.estaFinalizada) {
        finalizada = false;
      } else {
        finalizada = true;
      }
      this.tareasSecvice
        .actualizaTarea(tarea.tareaId, finalizada)
        .subscribe((res) => {
          if (res) {
            this.getTareas();
          }
        });
    });
  }

  //Eliminar tareas segun las que seleccione de la lista
  eliminarTareas() {
    console.log('eliminarTareas');
    console.log(this.tareaSeleccionada);
    this.tareaSeleccionada.forEach((tarea) => {
      console.log('soy la tarea', tarea.tareaId);

      this.tareasSecvice.eliminarTarea(tarea.tareaId).subscribe((res) => {
        if (res) {
          this.getTareas();
          console.log('res', res);
        }
      });
    });
  }
}

interface QueHacer {
  tareaId: number;
  tarea: string;
  estaFinalizada: boolean;
}

interface City {
  name: string;
  code: string;
}

interface Country {
  name: string;
  code: string;
}
