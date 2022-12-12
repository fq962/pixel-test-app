import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  WEB_SERVICE = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  //Obtener todas las tareas
  obtenerTareas() {
    return this.http.get(`${this.WEB_SERVICE}/tareas`).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return [];
      }),
      catchError((err) => {
        console.log('SERVICE ERROR: ', err);
        return [err];
      })
    );
  }

  agregarTarea(tarea: string) {
    const body = new HttpParams().set('tarea', tarea);
    return this.http.post(`${this.WEB_SERVICE}/tareas`, body).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return false;
      }),
      catchError((err) => {
        console.log('SERVICE ERROR: ', err);
        return [err];
      })
    );
  }

  actualizaTarea(tareaId: number, estaFinalizada: boolean) {
    const body = {
      finalizada: estaFinalizada,
    };
    return this.http.patch(`${this.WEB_SERVICE}/tareas/${tareaId}`, body).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return false;
      }),
      catchError((err) => {
        console.log('SERVICE ERROR: ', err);
        return [err];
      })
    );
  }

  eliminarTarea(tareaId: number) {
    let params = new HttpParams();
    params = params.append('tareaId', tareaId);
    return this.http.delete(`${this.WEB_SERVICE}/tareas`, { params }).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return false;
      }),
      catchError((err) => {
        console.log('SERVICE ERROR: ', err);
        return [err];
      })
    );
  }
}
