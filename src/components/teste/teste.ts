import { Component } from '@angular/core';

/**
 * Generated class for the TesteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'teste',
  templateUrl: 'teste.html'
})
export class TesteComponent {

  text: string;

  constructor() {
    console.log('Hello TesteComponent Component');
    this.text = 'Hello World';
  }

}
