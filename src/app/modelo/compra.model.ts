import { BoletasComponent } from "../componentes/boletas/boletas.component";

 
export interface Compra{
    orden: number,
    cantidad?:number;
    producto?:string;
    valorUnidad?:number;
}
