import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.page.html',
  styleUrls: ['./editarusuario.page.scss'],
})
export class EditarusuarioPage implements OnInit {

  usuario: Usuario;
  roles: string[] = [];
  rolesSeleccionados: string[] = [];
  rolesEnviar: Set<String> = new Set<String>();

  constructor(
    private usuarioService: UsuarioService, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {

    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.usuarioService.detallesUsuario(Number(id)).subscribe(
      data => {
        this.usuario = data;

        //Obtenemos los roles del usuario y cortamos el texto
        var rol = data;
        rol.roles.forEach(item => {
          var x: string = item['rolNombre'];
          this.roles.push(x.substring(5));
        });
        
        //cargamos los roles para mostrarlo en el ion-select
        if(this.roles.indexOf('ADMINISTRADOR') != -1){
          this.rolesSeleccionados.push('ADMINISTRADOR');
        }  
        if(this.roles.indexOf('USER') != -1){
          this.rolesSeleccionados.push('USER');
        }
        if(this.roles.indexOf('CAJERO') != -1){
          this.rolesSeleccionados.push('CAJERO');
        }
        if(this.roles.indexOf('LECTURADOR') != -1){
          this.rolesSeleccionados.push('LECTURADOR');
        }
        if(this.roles.indexOf('PLOMERO') != -1){
          this.rolesSeleccionados.push('PLOMERO');
        }
        
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );

  }


  actualizarUsuario(): void {

    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.rolesEnviar.clear();

    this.rolesSeleccionados.forEach( item => {

      if(item == 'ADMINISTRADOR'){
        this.rolesEnviar.add('administrador');
      }

      if(item == 'USER'){
        this.rolesEnviar.add('user');
      }

      if(item == 'CAJERO'){
        this.rolesEnviar.add('cajero');
      }

      if(item == 'LECTURADOR'){
        this.rolesEnviar.add('lecturador');
      }

      if(item == 'PLOMERO'){
        this.rolesEnviar.add(('plomero'));
      }
       
    });
    

    var nuevoRoles: any[] = [];

    //obtenemos los nuevos roles selecionados para enviar
    this.rolesEnviar.forEach( item => {
      nuevoRoles.push(item);
    });

    var nuevoUsuario: Usuario = new Usuario(this.usuario.usuario, this.usuario.password, this.usuario.socio, nuevoRoles);

    this.usuarioService.actualizarUsuario(Number(id), nuevoUsuario).subscribe(
      data => {
        this.presentToast('Usuario actualizado');
        this.router.navigate(['/listarusuarios']);
      }, 
      err => {
        this.presentToast(err.error.message);
      }
    );
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  //obtenemos los valores del ion-select
  handleChange(ev) {
    this.rolesSeleccionados = ev.target.value;
  }


}
