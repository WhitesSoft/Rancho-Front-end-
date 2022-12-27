import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Socio } from 'src/app/models/socio';
import { ReportesService } from 'src/app/service/reportes.service';
import { SocioService } from 'src/app/service/socio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-listarsocios',
  templateUrl: './listarsocios.page.html',
  styleUrls: ['./listarsocios.page.scss'],
})
export class ListarsociosPage implements OnInit {

  socios: Socio[] = [];
  estado: boolean;

  constructor(
    private socioService: SocioService, 
    private toastController: ToastController,
    private reportesServices: ReportesService
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  ionViewWillEnter() {
    this.cargarLista();
  }

  cargarLista(): void {
    this.socioService.listaSocios().subscribe(
      data => {
        this.socios = data;
        if(this.socios.length != 0){
          this.estado = true;
        }
      }, 
      err => {
        this.presentToast(err.error.message);
      }
    );
  }

  imprimir(): void {
    const encabezado = ["Nombre Completo", "Carnet de identidad", "Fecha de nacimiento", "Direccion", "Correo"];

    var cuerpo: any[] = [];
    for(let x of this.socios){
      cuerpo.push([x.nombres + " " + x.apellidos, x.cedula, x.fechaNacimiento.substring(0, 10), x.direccion, x.correo]);
    }

    this.reportesServices.imprimir(encabezado, cuerpo, "Listado de socios", true);
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }


}
