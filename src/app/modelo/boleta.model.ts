import { Compra } from 'src/app/modelo/compra.model';
import firebase from 'firebase';

export interface Boleta{
    id?:string;
    nombre?:string;
    apellido?:string;
    domicilio?:string;
    telefono?:number;
    compras?:Array<Compra>;
    mostrarCompras?:boolean;
    pedido?:number;
    fechaCreacion?:firebase.firestore.Timestamp;
}
