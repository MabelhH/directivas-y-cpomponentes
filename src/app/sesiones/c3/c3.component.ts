import { Component } from '@angular/core';
import { GuardsCheckStart } from '@angular/router';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {

  listas:string[]=[]
  addlista(tarea:string){
  this.listas.push(tarea)
  }

}

