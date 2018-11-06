import { GraficosPage } from './../graficos/graficos';
import { FechaCaixaPage } from './../fecha-caixa/fecha-caixa';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
   irParaFecharCaixa() {
    this.navCtrl.push(FechaCaixaPage);
  }
  irParaGraficos() {
    this.navCtrl.push(GraficosPage);
  }

}
