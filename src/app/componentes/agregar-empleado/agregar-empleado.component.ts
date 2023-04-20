import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/servicio/Empleado';
import { ProductoService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;

  constructor(private fb: FormBuilder,
             private router: Router,
             private toastr: ToastrService,
             private _productoService: ProductoService) { 
this.formularioDeEmpleados = this.fb.group({
Nombre: ['', Validators.required],
NumPersonas: ['', Validators.required],
Telefono: ['', Validators.required],

})
}
ngOnInit(): void {
  
} 

agregarReservacion(){
  console.log(this.formularioDeEmpleados);

 

const Empleado: Empleado = {
nombre: this.formularioDeEmpleados.get ('Nombre')?.value,
numpersonas: this.formularioDeEmpleados.get ('NumPersonas')?.value,
telefono: this.formularioDeEmpleados.get ('Telefono')?.value,

}
console.log(Empleado);
this._productoService.guardarProducto(Empleado).subscribe(data =>{

this.toastr.success('  ', 'Reservacion Echa!');
this.router.navigate(['/listar-empleado/']);


}, Error => {

  console.log(Error);
  this.formularioDeEmpleados.reset();

})

}

} 