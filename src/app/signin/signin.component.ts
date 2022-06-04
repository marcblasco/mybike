import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { usuarios } from '../Modelo/usuarios';
import { AuthService } from '../Service/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user : usuarios;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.user={password: '', email:''};
  }

  ngOnInit() {
  }

 /* signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/listar']);
        },
        err => console.log(err)
      )
  }*/
 signIn() {  
    this.router.navigate(['listar']);      
  }
}
