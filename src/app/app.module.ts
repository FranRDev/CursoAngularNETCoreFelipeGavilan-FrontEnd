import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'

import { MaterialModule } from './material/material.module';
import { MarkdownModule } from 'ngx-markdown'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import "leaflet/dist/images/marker-shadow.png"
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { MenuComponent } from './menu/menu.component';
import { ValoracionComponent } from './utilidades/valoracion/valoracion.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { SelectorImagenComponent } from './utilidades/selector-imagen/selector-imagen.component';
import { EditorMarkdownComponent } from './utilidades/editor-markdown/editor-markdown.component';
import { FormularioCineComponent } from './cines/formulario-cine/formulario-cine.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { FormularioPeliculaComponent } from './peliculas/formulario-pelicula/formulario-pelicula.component';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { AutocompletarActorComponent } from './actores/autocompletar-actor/autocompletar-actor.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';
import { AutorizacionComponent } from './seguridad/autorizacion/autorizacion.component';
import { IniciarSesionComponent } from './seguridad/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';
import { InterceptorService } from './seguridad/interceptor.service';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    ValoracionComponent,
    PaginaInicioComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCinesComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    SelectorImagenComponent,
    EditorMarkdownComponent,
    FormularioCineComponent,
    MapaComponent,
    FormularioPeliculaComponent,
    SelectorMultipleComponent,
    AutocompletarActorComponent,
    MostrarErroresComponent,
    DetallePeliculaComponent,
    AutorizacionComponent,
    IniciarSesionComponent,
    RegistroComponent,
    FormularioAutenticacionComponent,
    IndiceUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    LeafletModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }