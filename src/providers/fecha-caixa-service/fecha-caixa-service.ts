import { Venda } from './../../app/model/model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/toPromise';

/*
  Generated class for the FechaCaixaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FechaCaixaServiceProvider {

  constructor(public http: Http) {
    //console.log('Hello FechaCaixaServiceProvider Provider');
  }

  buscarVendas(venda: Venda): Promise<Venda[]> {
    let url = "https://my-json-server.typicode.com/geovannigava/dataservistestes/vendas?";
    venda.cpfCnpj = this.tiraTracoPontoBarra(venda.cpfCnpj);
    if (venda.tipoVenda == 1){
      url = url + "cpfCnpj=" + venda.cpfCnpj + "&dataVenda=" + venda.dataVenda + "&tipoVenda=1";
    } else {
      url = url + "cpfCnpj=" + venda.cpfCnpj + "&dataVenda=" + venda.dataVenda;
    }
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json());
  }

  tiraTracoPontoBarra(cpfCnpj: string): string{
    var novoCPF = cpfCnpj.replace(/[^\d]+/g,'');
    return novoCPF;
}

}
