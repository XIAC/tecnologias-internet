import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-inicio',
  standalone: true,
  styleUrl: './inicio.component.css',
  templateUrl: './inicio.component.html',
})
export class InicioComponent {
  // protected readonly title = signal('tecnologias-internet');
  asignatura : string = 'Tecnologias en Internet';
  estudiante : string = 'Pedrito';
  edad : number = 15;
  inscrito: boolean = true;
  mensaje = signal('');

    asistencia() : void {
    this.mensaje.set(
      `${this.estudiante} no asistio a clases`
    );
  }

}
