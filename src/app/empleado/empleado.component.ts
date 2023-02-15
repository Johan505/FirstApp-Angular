import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui va un empleado</p>",
  styleUrls: ['./empleado.component.css']
 //styles:["p{background-color:aqua;}"]
})
export class EmpleadoComponent {

  nombre= "Johan"
  apellido= "Aven"
  edad =18
  //empresa = "Millenium"

 habilitacionCuadro=false

 usuRegistrado=false

 getRegistroUsuario(){
  this.usuRegistrado=true
 }

}
