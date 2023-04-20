import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/servicio/Empleado';
import { ProductoService } from 'src/app/servicio/crud.service';
 
@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  listProductos: Empleado[] = [];

  constructor(private _productoService: ProductoService,
    
     private toastr: ToastrService  ){}

  ngOnInit(): void {
    this.obtenerProductos();
    
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
this.listProductos = data;

    }, Error=> {
      console.log(Error);


    })
  }
  eliminarProducto(id: any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error(' Reservacion Eliminada  ', 'Res Eliminate');
      this.obtenerProductos();


    }, Error=>{
      console.log(Error);
    })
  }

}
 