import { Injectable } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor() { }

  imprimir(encabezado: string[], cuerpo: Array<any>, titulo: string, guardar?: boolean){
    
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "letter"
    });
    doc.text(titulo, doc.internal.pageSize.width/2, 25, {align: 'center'})

    autoTable(doc, {
      head: [encabezado],
      body: cuerpo,
    })

    //Guardar pdf
    if(guardar){
      const hoy = new Date();
      doc.save(titulo + '_' + hoy.toISOString().split('T')[0] + '.pdf'); 
    } else { //abrir pdf

    }

  }

}
