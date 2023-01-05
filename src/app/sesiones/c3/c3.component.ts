import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GuardsCheckStart } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit  {
  public formLogin!: FormGroup;
  correo!:string;
  
   @Output() guardar:EventEmitter<string>=new EventEmitter<string>()   
   
  constructor(private formBuilder:FormBuilder){

  }
  anadir(tarea:string, descript:string){
    this.guardar.emit(tarea+': '+descript)
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      tarea:['', 
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      descripcion:['', 
        [
          Validators.required,
          Validators.maxLength(500)
        ]
      ]
    })

    
  }
}
