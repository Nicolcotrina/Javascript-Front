import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: String = '';
  contra: String = '';
  constructor(){ 
}

mostrarContra(){
  this.nombre = 'Nombre'
  this.contra='Contraseña'
  //console.log(this.nombre)
}

iniciar(){
  
}
}
