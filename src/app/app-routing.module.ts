import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';
import { AdminGuard } from './admin.guard';
import { IniciarSesionComponent } from './seguridad/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';

const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'actores', component: IndiceActoresComponent, canActivate: [AdminGuard] },
  { path: 'actores/crear', component: CrearActorComponent, canActivate: [AdminGuard] },
  { path: 'actores/editar/:id', component: EditarActorComponent, canActivate: [AdminGuard] },
  { path: 'cines', component: IndiceCinesComponent, canActivate: [AdminGuard] },
  { path: 'cines/crear', component: CrearCineComponent, canActivate: [AdminGuard] },
  { path: 'cines/editar/:id', component: EditarCineComponent, canActivate: [AdminGuard] },
  { path: 'generos', component: IndiceGenerosComponent, canActivate: [AdminGuard] },
  { path: 'generos/crear', component: CrearGeneroComponent, canActivate: [AdminGuard] },
  { path: 'generos/editar/:id', component: EditarGeneroComponent, canActivate: [AdminGuard] },
  { path: 'peliculas/crear', component: CrearPeliculaComponent, canActivate: [AdminGuard] },
  { path: 'peliculas/buscar', component: FiltroPeliculasComponent },
  { path: 'peliculas/editar/:id', component: EditarPeliculaComponent, canActivate: [AdminGuard] },
  { path: 'peliculas/:id', component: DetallePeliculaComponent },
  { path: 'usuarios', component: IndiceUsuariosComponent, canActivate: [AdminGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
