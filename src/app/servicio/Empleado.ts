export class Empleado{

    _id?: string;
    nombre:string;
    numpersonas: string;
    telefono: string;

constructor( nombre:string , numpersonas: string, telefono: string   ){
    this.nombre = nombre;
    this.numpersonas = numpersonas ;
    this.telefono = telefono;
}

}