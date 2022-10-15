import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ControladorGuard as guard } from './guards/controlador.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./ui/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./ui/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'createuser',
    loadChildren: () => import('./ui/createuser/createuser.module').then( m => m.CreateuserPageModule)
  },
  {
    path: 'listarsocios',
    loadChildren: () => import('./ui/listarsocios/listarsocios.module').then( m => m.ListarsociosPageModule), 
    canActivate: [guard], data: { requiredRoles: ['administrador'] }
  },
  {
    path: 'listarusuarios',
    loadChildren: () => import('./ui/listarusuarios/listarusuarios.module').then( m => m.ListarusuariosPageModule), 
    canActivate: [guard], data: { requiredRoles: ['administrador'] }
  },
  {
    path: 'perfil',
    loadChildren: () => import('./ui/perfil/perfil.module').then( m => m.PerfilPageModule), 
    canActivate: [guard], data: { requiredRoles: ['administrador', 'user'] }
  },
  {
    path: 'listarmedidores',
    loadChildren: () => import('./ui/listarmedidores/listarmedidores.module').then( m => m.ListarmedidoresPageModule), 
    canActivate: [guard], data: { requiredRoles: ['administrador'] }
  },
  {
    path: 'listarmedidoresuser',
    loadChildren: () => import('./ui/listarmedidoresuser/listarmedidoresuser.module').then( m => m.ListarmedidoresuserPageModule), 
    canActivate: [guard], data: { requiredRoles: ['user'] }
  },
  {
    path: 'detallesocio/:id',
    loadChildren: () => import('./ui/detallesocio/detallesocio.module').then( m => m.DetallesocioPageModule), 
    canActivate: [guard], data: { requiredRoles: ['administrador'] }
  },
  {
    path: 'detalleusuario/:id',
    loadChildren: () => import('./ui/detalleusuario/detalleusuario.module').then( m => m.DetalleusuarioPageModule), 
    canActivate: [guard], data: { requiredRoles: ['administrador'] }
  },
  {
    path: 'editarusuario/:id',
    loadChildren: () => import('./ui/editarusuario/editarusuario.module').then( m => m.EditarusuarioPageModule), 
    canActivate: [guard], data: { requiredRoles: ['administrador'] }
  },
  {
    path: 'editarsocio/:id',
    loadChildren: () => import('./ui/editarsocio/editarsocio.module').then( m => m.EditarsocioPageModule), 
    canActivate: [guard], data: { requiredRoles: ['administrador'] }
  }, 
  {
    path: 'crearmedidor/:id',
    loadChildren: () => import('./ui/crearmedidor/crearmedidor.module').then( m => m.CrearmedidorPageModule)
  },
  {
    path: 'detallemedidor/:id',
    loadChildren: () => import('./ui/detallemedidor/detallemedidor.module').then( m => m.DetallemedidorPageModule)
  },
  {
    path: 'editarmedidor/:id',
    loadChildren: () => import('./ui/editarmedidor/editarmedidor.module').then( m => m.EditarmedidorPageModule)
  },
  {
    path: '**',
    redirectTo: 'login', 
    pathMatch: 'full'
  }
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
