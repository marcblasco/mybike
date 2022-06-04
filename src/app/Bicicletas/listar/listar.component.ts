import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bicicleta } from 'src/app/Modelo/Bicicleta';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  bicicleta:Bicicleta[]=[];
  constructor(private service: ServiceService, private router: Router) { 
    
  }

  ngOnInit() {
    this.service.getBicicletas()
      .subscribe(data => {
        this.bicicleta = data;
      });
  }
  Editar(bici:Bicicleta):void{
    localStorage.setItem("id",bici.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(bici:Bicicleta){
    this.service.deleteBicicletas(bici)
    .subscribe(data=>{
      this.bicicleta=this.bicicleta.filter(p=>p!==bici);
      alert("Usuario eliminado...");
    })
  }


}
