import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private CrudService: CrudService,
    private ruteador: Router
    
    ){

this.formularioDeEmpleados=this.formulario.group({

  Nombre: [''],
  NumPersonas: [''],
  Telefono: ['']

});


   }
  ngOnInit(): void {
     }
    EnviarDatos():any {
      console.log("Me pe");
      console.log(this.formularioDeEmpleados.value);
      this.CrudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe();


      this.ruteador.navigateByUrl('/listar-empleado');

    }

 

}
