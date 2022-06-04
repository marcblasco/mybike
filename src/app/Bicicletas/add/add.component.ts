import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bicicleta } from 'src/app/Modelo/Bicicleta';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  bicicleta:Bicicleta[]=[]
  constructor(private router:Router, private http: ServiceService) { }

  

  ngOnInit(): void {
  }
  Guardar(){
    /*this.service.createBicicleta(this.bicicleta)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
     
    })*/
    this.router.navigate(["listar"]);
  }
}
