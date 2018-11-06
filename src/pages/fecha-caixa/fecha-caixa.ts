import { RelatorioCaixaPage } from './../relatorio-caixa/relatorio-caixa';
import { FechaCaixaServiceProvider } from './../../providers/fecha-caixa-service/fecha-caixa-service';
import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { Venda } from '../../app/model/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'page-fecha-caixa',
  templateUrl: 'fecha-caixa.html',
})
export class FechaCaixaPage {

  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  pureResult: any;
  maskedId: any;
  val: any;
  v: any;

  isenabled:boolean=false;

  vendas: Venda[];
  venda = new Venda();

  constructor(
    public modalCtrl: ModalController,
    private menu: MenuController,
    public navCtrl: NavController,
    private fechaCaixaService: FechaCaixaServiceProvider) {
  }

  myDate: Date;


  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewWillLeave(){
    this.menu.swipeEnable(true);
  }

  format(valString) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    this.pureResult = parts;
    if(parts[0].length <= 11){
      this.maskedId = this.cpf_mask(parts[0]);
      return this.maskedId;
    }else{
      this.maskedId = this.cnpj(parts[0]);
      return this.maskedId;
    }
};

unFormat(val) {
    if (!val) {
        return '';
    }
    val = val.replace(/\D/g, '');

    if (this.GROUP_SEPARATOR === ',') {
        return val.replace(/,/g, '');
    } else {
        return val.replace(/\./g, '');
    }
};

 cpf_mask(v) {
    v = v.replace(/\D/g, ''); //Remove all that is not digits
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit again
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Insert an dash between the third and quarter digit
    return v;
}

 cnpj(v) {
    v = v.replace(/\D/g, ''); //Remove all that is not digits
    v = v.replace(/^(\d{2})(\d)/, '$1.$2'); //Insert a dot between the second and third digits
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); //Insert a dot between the fifth and sixth digits
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); //Insert a slash between the eighth and ninth digits
    v = v.replace(/(\d{4})(\d)/, '$1-$2'); //Insert an dash after the quarter digit
    return v;
}

pesquisar(form: FormControl){
//console.log(this.venda);
this.buscarVendas(this.venda);
}

buscarVendas(venda: Venda){
  this.fechaCaixaService.buscarVendas(venda).then(vendas => {
    this.vendas = vendas;
   console.log(this.vendas);
    this.navCtrl.push(RelatorioCaixaPage, {
      vendas: this.vendas
    });
  });
}

getvalida(): boolean{
  if (this.venda.cpfCnpj != '' && !this.venda.dataVenda ) {
    return true;
  } else {
    return false;
  }

}


}
