import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Venda } from '../../app/model/model';


@Component({
  selector: 'page-relatorio-caixa',
  templateUrl: 'relatorio-caixa.html',
})
export class RelatorioCaixaPage {

  vendas = [];
  total: number;
  totalValor: number =0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatorioCaixaPage');
    let venda1 = new Venda();
    venda1.cliente = 'geovanni';
    venda1.cpfCnpj = '1212312312223';
    let venda2 = new Venda();
    venda2.cliente = 'mateus';
    venda2.cpfCnpj = '1212312312223';
    //this.vendas.push(venda1,venda2);
    this.vendas = this.navParams.get('vendas');
    this.total = this.vendas.length;
    for (let venda of this.vendas) {
      this.totalValor = this.totalValor + venda.valorVenda;
    }
  }

}
