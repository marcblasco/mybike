import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bicicleta } from '../Modelo/Bicicleta';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  private URL='http://localhost:8080/mibike/bicicletas';

  getBicicletas(){
    return this.http.get<Bicicleta[]>(this.URL);
  }
  createBicicleta(bicicleta:Bicicleta){
    return this.http.post<Bicicleta>(this.URL,bicicleta);
  }
  getBicicletaId(id:number){
    return this.http.get<Bicicleta>(this.URL+"/"+id);
  }
  updateBicicleta(bicicleta:Bicicleta){
    return this.http.put<Bicicleta>(this.URL+"/"+bicicleta.id,bicicleta);
  }
  deleteBicicletas(bicicleta:Bicicleta){
    return this.http.delete<Bicicleta>(this.URL+"/"+bicicleta.id);
  }
}
