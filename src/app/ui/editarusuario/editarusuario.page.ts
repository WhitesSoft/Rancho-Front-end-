import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RolNombre } from 'src/app/enums/rol-nombre';
import { Rol } from 'src/app/models/rol';
import { Socio } from 'src/app/models/socio';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.page.html',
  styleUrls: ['./editarusuario.page.scss'],
})
export class EditarusuarioPage implements OnInit {

  usuario: Usuario;
  x: Rol;
  roles: string[] = [];
  rolSelected: string[] = [];
  rolEnviar: Set<Rol> = new Set();

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

        //Obtenemos los roles del usuario
        var rol = data;
        rol.roles.forEach(item => {
          var x: string = item['rolNombre'];
          this.roles.push(x.substring(5));
        });

        //cargamos los roles
        if(this.roles.indexOf('ADMINISTRADOR') != -1){
          this.rolSelected.push('ADMINISTRADOR');
          //this.rolEnviar.add((this.x.setRolNombre(RolNombre.ROLE_ADMINISTRADOR)));
        }
        if(this.roles.indexOf('USER') != -1){
          this.rolSelected.push('USER');
          this.rolEnviar.add('USER');
        }
        if(this.roles.indexOf('CAJERO') != -1){
          this.rolSelected.push('CAJERO');
          this.rolEnviar.add('CAJERO');
        }
        if(this.roles.indexOf('LECTURADOR') != -1){
          this.rolSelected.push('LECTURADOR');
          this.rolEnviar.add('LECTURADOR');
        }
        if(this.roles.indexOf('PLOMERO') != -1){
          this.rolSelected.push('PLOMERO');
          this.rolEnviar.add('PLOMERO');
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

    console.log(this.usuario);

    this.usuario.roles = this.rolEnviar;
    //this.usuario.setRoles(this.rolEnviar);
    //console.log(this.usuario.setRoles(this.rolSelected));
    console.log(this.usuario);
    console.log(this.rolSelected);

    this.usuarioService.actualizarUsuario(Number(id), this.usuario).subscribe(
      data => {
        this.presentToast('Usuario actualizado');
        this.router.navigate(['/listarusuarios']);
      }, 
      err => {
        this.presentToast(err.error.mensaje);
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
    this.rolSelected = ev.target.value;
  }


}
