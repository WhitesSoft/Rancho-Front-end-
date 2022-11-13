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
    loadChildren: () => import('./ui/main/main.module').then( m => m.MainPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'PLOMERO', 'CAJERO', 'USER'] }
  },
  {
    path: 'createuser',
    loadChildren: () => import('./ui/createuser/createuser.module').then( m => m.CreateuserPageModule)
  },
  {
    path: 'listarsocios',
    loadChildren: () => import('./ui/listarsocios/listarsocios.module').then( m => m.ListarsociosPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR'] }
  },
  {
    path: 'listarusuarios',
    loadChildren: () => import('./ui/listarusuarios/listarusuarios.module').then( m => m.ListarusuariosPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR'] }
  },
  {
    path: 'perfil',
    loadChildren: () => import('./ui/perfil/perfil.module').then( m => m.PerfilPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'USER'] }
  },
  {
    path: 'listarmedidores',
    loadChildren: () => import('./ui/listarmedidores/listarmedidores.module').then( m => m.ListarmedidoresPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR'] }
  },
  {
    path: 'listarmedidoresuser',
    loadChildren: () => import('./ui/listarmedidoresuser/listarmedidoresuser.module').then( m => m.ListarmedidoresuserPageModule), 
    canActivate: [guard], data: { requiredRoles: ['USER'] }
  },
  {
    path: 'detallesocio/:id',
    loadChildren: () => import('./ui/detallesocio/detallesocio.module').then( m => m.DetallesocioPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR'] }
  },
  {
    path: 'detalleusuario/:id',
    loadChildren: () => import('./ui/detalleusuario/detalleusuario.module').then( m => m.DetalleusuarioPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR'] }
  },
  {
    path: 'editarusuario/:id',
    loadChildren: () => import('./ui/editarusuario/editarusuario.module').then( m => m.EditarusuarioPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR'] }
  },
  {
    path: 'editarsocio/:id',
    loadChildren: () => import('./ui/editarsocio/editarsocio.module').then( m => m.EditarsocioPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR'] }
  }, 
  {
    path: 'crearmedidor/:id',
    loadChildren: () => import('./ui/crearmedidor/crearmedidor.module').then( m => m.CrearmedidorPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR'] }
  },
  {
    path: 'detallemedidor/:id',
    loadChildren: () => import('./ui/detallemedidor/detallemedidor.module').then( m => m.DetallemedidorPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'USER'] }
  },
  {
    path: 'editarmedidor/:id',
    loadChildren: () => import('./ui/editarmedidor/editarmedidor.module').then( m => m.EditarmedidorPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR'] }
  },
  {
    path: 'listarsolicitudes',
    loadChildren: () => import('./ui/listarsolicitudes/listarsolicitudes.module').then( m => m.ListarsolicitudesPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR'] }
  },
  {
    path: 'listarcomunicados',
    loadChildren: () => import('./ui/listarcomunicados/listarcomunicados.module').then( m => m.ListarcomunicadosPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'USER', 'LECTURADOR', 'PLOMERO', 'CAJERO'] }
  },
  {
    path: 'crearcomunicado',
    loadChildren: () => import('./ui/crearcomunicado/crearcomunicado.module').then( m => m.CrearcomunicadoPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'PLOMERO', 'CAJERO'] }
  },
  {
    path: 'detallecomunicado/:id',
    loadChildren: () => import('./ui/detallecomunicado/detallecomunicado.module').then( m => m.DetallecomunicadoPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'PLOMERO', 'CAJERO'] }
  },
  {
    path: 'editarcomunicado/:id',
    loadChildren: () => import('./ui/editarcomunicado/editarcomunicado.module').then( m => m.EditarcomunicadoPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'PLOMERO', 'CAJERO'] }
  },
  {
    path: 'crearsolicitud',
    loadChildren: () => import('./ui/crearsolicitud/crearsolicitud.module').then( m => m.CrearsolicitudPageModule), 
    canActivate: [guard], data: { requiredRoles: ['USER'] }
  },
  {
    path: 'detallesolicitud/:id',
    loadChildren: () => import('./ui/detallesolicitud/detallesolicitud.module').then( m => m.DetallesolicitudPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'USER'] }
  },
  {
    path: 'editarsolicitud/:id',
    loadChildren: () => import('./ui/editarsolicitud/editarsolicitud.module').then( m => m.EditarsolicitudPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'USER'] }
  },
  {
    path: 'listarsolicitudesuser',
    loadChildren: () => import('./ui/listarsolicitudesuser/listarsolicitudesuser.module').then( m => m.ListarsolicitudesuserPageModule), 
    canActivate: [guard], data: { requiredRoles: ['USER'] }
  },
  {
    path: 'comunicadosglobal',
    loadChildren: () => import('./ui/comunicadosglobal/comunicadosglobal.module').then( m => m.ComunicadosglobalPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'PLOMERO', 'CAJERO', 'USER'] }
  },
  {
    path: 'creartarifa',
    loadChildren: () => import('./ui/creartarifa/creartarifa.module').then( m => m.CreartarifaPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'CAJERO'] }
  },
  {
    path: 'detalletarifa/:id',
    loadChildren: () => import('./ui/detalletarifa/detalletarifa.module').then( m => m.DetalletarifaPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'CAJERO'] }
  },
  {
    path: 'editartarifa/:id',
    loadChildren: () => import('./ui/editartarifa/editartarifa.module').then( m => m.EditartarifaPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'CAJERO'] }
  },
  {
    path: 'listartarifas',
    loadChildren: () => import('./ui/listartarifas/listartarifas.module').then( m => m.ListartarifasPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'CAJERO'] }
  },
  {
    path: 'crearconsumo/:id',
    loadChildren: () => import('./ui/crearconsumo/crearconsumo.module').then( m => m.CrearconsumoPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'CAJERO'] }
  },
  {
    path: 'detallefactura/:id',
    loadChildren: () => import('./ui/detallefactura/detallefactura.module').then( m => m.DetallefacturaPageModule), 
    canActivate: [guard], data: { requiredRoles: ['ADMINISTRADOR', 'LECTURADOR', 'PLOMERO', 'CAJERO', 'USER'] }
  },
  {
    path: '**',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
