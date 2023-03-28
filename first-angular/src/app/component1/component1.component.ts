import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  edad:number;
  nombres:Array<string>;
  constructor(){
    this.edad =27
    this.nombres = ['juan', 'felipe' , 'parrado' , 'salinas']
  }
  ngOnInit(): void {
    alert("componente 1 cargado")
  }
  aumentarEdad(){
    this.edad ++;
  }
  disminuirEdad(){
    this.edad --;
  }
}
