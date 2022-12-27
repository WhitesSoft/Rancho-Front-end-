import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Facturasnopagadas } from 'src/app/models/facturasnopagadas';
import { Multa } from 'src/app/models/multa';
import { Socio } from 'src/app/models/socio';
import { MultasService } from 'src/app/service/multas.service';
import { SocioService } from 'src/app/service/socio.service';


@Component({
  selector: 'app-asignarmultas',
  templateUrl: './asignarmultas.page.html',
  styleUrls: ['./asignarmultas.page.scss'],
})
export class AsignarmultasPage implements OnInit {

  socio: Socio;
  facturas: Facturasnopagadas[] = [];
  nombres = '';
  idSocio: number;

  constructor(
    private multasService: MultasService,
    private socioService: SocioService,
    private toastController: ToastController,

  ) { }

  ngOnInit() {
    this.verificar();
  }

  //Metodo para verificar si hay multas
  verificar(): void {

    //Listamos todos los socios
    this.socioService.listaSocios().subscribe(
      data => {

        data.forEach(ele => {

          //medidores del socio
          var medidores = ele['medidores'];

          for (let p of medidores) {

            //Obtenemos los consumos del medidor
            var consumos = p['consumos'];
            consumos.forEach(consumo => {

              //Obtenemos el estado de la factura, si esta pagado o no (true o false)
              var estadoFactura = consumo['factura']['estado'];

              //Si la factura no esta pagada, accedemos a esa factura
              if (!estadoFactura) {

                //Obtenemos los datos del socio
                this.nombres = ele.nombres + ' ' + ele.apellidos;
                this.idSocio = ele.idSocio;

                //Aqui hacemos una resta de dias entre la fecha de la factura y la fecha actual
                var fechaFactura = new Date(consumo['factura']['periodo']).getTime();
                const fechaActual = new Date().getTime();

                var diff = fechaActual - fechaFactura;
                var dias = (diff / (1000 * 60 * 60 * 24)) / 30; // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días || 30 dias

                //Si los dias llegan a ser un 1 mes, se muestra los datos
                if (dias >= 1) {

                  var diasRetraso = Math.trunc((diff / (1000 * 60 * 60 * 24)));
                  var fechaFactura1 = new Date(consumo['factura']['periodo']).toISOString().split('T')[0];

                  //Add facturas no pagadas en nuestro array
                  this.facturas.push(
                    new Facturasnopagadas(this.nombres, fechaFactura1, this.idSocio, diasRetraso));

                }

              }

            });

          }

        });

      }
    );
  }

  asignarMulta(id: Number): void {

    //Obtenemos el socio
    this.socioService.detallesSocio(Number(id)).subscribe(
      data => {
        this.socio = data;
      }
    );

    //damos una vigencia de 15 dias para pagar la multa
    const fechaHoy = new Date();
    var fechaVigencia = new Date(fechaHoy.setDate(fechaHoy.getDate() + 15)).toISOString().split('T')[0];
                  
    //Generamos la multa
    var multa = new Multa(fechaVigencia, 10, false, this.socio);
    this.multasService.crearMulta(Number(id), multa).subscribe(
      data => {
        this.presentToast('Multa asignada');
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

}
