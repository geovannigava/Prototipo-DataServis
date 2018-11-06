
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-graficos',
  templateUrl: 'graficos.html',
})
export class GraficosPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;


  barChart: any;
  doughnutChart: any;
  lineChart: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraficosPage');
  }


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [2897.54, 4323.65, 5323.22, 2123.44, 1233.22, 800], label: 'Cartão'},
    {data: [3983.33, 6887.44, 4500.73, 9000.97, 8600.00, 2200.49], label: 'À Vista'},
    {data: [6880.87,11211.09, 9824.05, 11124,41, 9833,22, 3000,49], label: 'Total'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100.8),
      59,
      80,
      (Math.random() * 100.8),
      56,
      (Math.random() * 100.45),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 0.2)',
      pointBackgroundColor: 'rgba(153, 102, 255, 0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54, 162, 235, 0.2)'
    }]

    public lineChartData:Array<any> = [
      {data: [2897.54, 4323.65, 5323.22, 2123.44, 1233.22, 800], label: 'Cartão'},
      {data: [3983.33, 6887.44, 4500.73, 9000.97, 8600.00, 2200.49], label: 'À Vista'},
      {data: [6880.87,11211.09, 9824.05, 11124,41, 9833,22, 3000,49], label: 'Total'}
    ];
    public lineChartLabels:Array<any> = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    public lineChartOptions:any = {
      responsive: true
    };

    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

  // Doughnut
  public doughnutChartLabels:string[] = ['José Maria', 'Paulo Silva', 'Vicente Coelho'];
  public doughnutChartData:number[] = [987, 767, 220];
  public doughnutChartType:string = 'doughnut';


}
