import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  posi = false;
  usuario: Usuario;
  roles: string[] = [];

  constructor(
    private tokenService: TokenService, 
    private usuarioService: UsuarioService, 
  ) { }

  ngOnInit() {
    this.cargarPerfil();
  }

  cargarPerfil(): void {

    var usuario = this.tokenService.getUsuario();

    this.usuarioService.listaUsuarios().subscribe(
      data => {

        data.forEach( ele => {

          if(ele.usuario == usuario){
            this.usuario = ele;
           
            //Obtenemos roles
            var roles = ele['roles'];
            roles.forEach(item => {
              var x: string = item['rolNombre'];
              this.roles.push(x.substring(5));
            });

          }
          
        });
        
      }
    );
      
  }

}
