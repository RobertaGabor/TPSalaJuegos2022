import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Vistas/error/error.component';
import { HomeComponent } from './Vistas/home/home.component';
import { LoginComponent } from './Vistas/login/login.component';
import { QuienSoyComponent } from './Vistas/quien-soy/quien-soy.component';


const routes: Routes = [

  {path:"login",component:LoginComponent},//,children:[{path:"error",component:ErrorComponent}]  
  {path:"sobremi",component:QuienSoyComponent},
  {path:"home",component:HomeComponent},
  {path:"**",component:ErrorComponent},//va al final
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
