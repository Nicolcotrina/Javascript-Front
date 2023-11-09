import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  public forPrent: FormGroup = new FormGroup({});
  nombre: String = '';
  contra: String = '';
  constructor(){ 
}

ngOnInit(): void {
    this.initFormParent()
  }

  initFormParent():void {
    this.forPrent = new FormGroup(
      {
        name: new FormControl
      }
    )
  }

mostrarContra(){
  this.nombre = 'Nombre'
  this.contra='Contraseña'
  //console.log(this.nombre)
}

iniciar(){
  
}
registrar(){
  
}

}
