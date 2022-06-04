import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Bicicletas/add/add.component';
import { EditComponent } from './Bicicletas/edit/edit.component';
import { ListarComponent } from './Bicicletas/listar/listar.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path:'', 
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {path:'listar', component:ListarComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component: EditComponent},
  {path:'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
