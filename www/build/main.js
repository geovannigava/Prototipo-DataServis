webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraficosPage = /** @class */ (function () {
    function GraficosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [2897.54, 4323.65, 5323.22, 2123.44, 1233.22, 800], label: 'Cartão' },
            { data: [3983.33, 6887.44, 4500.73, 9000.97, 8600.00, 2200.49], label: 'À Vista' },
            { data: [6880.87, 11211.09, 9824.05, 11124, 41, 9833, 22, 3000, 49], label: 'Total' }
        ];
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 0.2)',
                pointBackgroundColor: 'rgba(153, 102, 255, 0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 0.2)'
            }
        ];
        this.lineChartData = [
            { data: [2897.54, 4323.65, 5323.22, 2123.44, 1233.22, 800], label: 'Cartão' },
            { data: [3983.33, 6887.44, 4500.73, 9000.97, 8600.00, 2200.49], label: 'À Vista' },
            { data: [6880.87, 11211.09, 9824.05, 11124, 41, 9833, 22, 3000, 49], label: 'Total' }
        ];
        this.lineChartLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // Doughnut
        this.doughnutChartLabels = ['José Maria', 'Paulo Silva', 'Vicente Coelho'];
        this.doughnutChartData = [987, 767, 220];
        this.doughnutChartType = 'doughnut';
    }
    GraficosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GraficosPage');
    };
    // events
    GraficosPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    GraficosPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    GraficosPage.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100.8),
            59,
            80,
            (Math.random() * 100.8),
            56,
            (Math.random() * 100.45),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
        __metadata("design:type", Object)
    ], GraficosPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], GraficosPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], GraficosPage.prototype, "lineCanvas", void 0);
    GraficosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-graficos',template:/*ion-inline-start:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\graficos\graficos.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gráficos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n        <ion-card>\n            <ion-card-header>\n                Primeira Semana - Maio/18\n            </ion-card-header>\n            <ion-card-content>\n                <canvas baseChart width="400" height="400"\n                [datasets]="lineChartData"\n                [labels]="lineChartLabels"\n                [options]="lineChartOptions"\n                [colors]="lineChartColors"\n                [legend]="lineChartLegend"\n                [chartType]="lineChartType"\n                (chartHover)="chartHovered($event)"\n                (chartClick)="chartClicked($event)"></canvas>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-card-header>\n                Primeira Semana - Maio/18\n              </ion-card-header>\n              <ion-card-content>\n                  <canvas baseChart\n                  [datasets]="barChartData"\n                  [labels]="barChartLabels"\n                  [options]="barChartOptions"\n                  [colors]="lineChartColors"\n                  [legend]="barChartLegend"\n                  [chartType]="barChartType"\n                  (chartHover)="chartHovered($event)"\n                  (chartClick)="chartClicked($event)"></canvas>\n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n                <ion-card-header>\n                  Vendedores - Maio/2018\n                </ion-card-header>\n                <ion-card-content>\n                    <canvas baseChart\n                    [data]="doughnutChartData"\n                    [labels]="doughnutChartLabels"\n                    [chartType]="doughnutChartType"\n                    (chartHover)="chartHovered($event)"\n                    (chartClick)="chartClicked($event)"></canvas>\n                </ion-card-content>\n              </ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\graficos\graficos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GraficosPage);
    return GraficosPage;
}());

//# sourceMappingURL=graficos.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatorioCaixaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model_model__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelatorioCaixaPage = /** @class */ (function () {
    function RelatorioCaixaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vendas = [];
        this.totalValor = 0;
    }
    RelatorioCaixaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RelatorioCaixaPage');
        var venda1 = new __WEBPACK_IMPORTED_MODULE_2__app_model_model__["a" /* Venda */]();
        venda1.cliente = 'geovanni';
        venda1.cpfCnpj = '1212312312223';
        var venda2 = new __WEBPACK_IMPORTED_MODULE_2__app_model_model__["a" /* Venda */]();
        venda2.cliente = 'mateus';
        venda2.cpfCnpj = '1212312312223';
        //this.vendas.push(venda1,venda2);
        this.vendas = this.navParams.get('vendas');
        this.total = this.vendas.length;
        for (var _i = 0, _a = this.vendas; _i < _a.length; _i++) {
            var venda = _a[_i];
            this.totalValor = this.totalValor + venda.valorVenda;
        }
    };
    RelatorioCaixaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-relatorio-caixa',template:/*ion-inline-start:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\relatorio-caixa\relatorio-caixa.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Relatório Fechamento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-grid >\n            <ion-row *ngFor="let venda of vendas"  class="brd margem" >\n              <ion-col  class="brd">\n                <ion-label style="font-weight: bold">Cliente:</ion-label>\n                <ion-item no-lines>\n                    {{venda.cliente}}\n                  </ion-item>\n              </ion-col>\n              <ion-col  class="brd">\n                  <ion-label  style="font-weight: bold">CPF/CNPJ:</ion-label>\n                   {{venda.cpfCnpj}}\n              </ion-col>\n              <ion-col class="brd">\n                  <ion-label style="font-weight: bold">Produto:</ion-label>\n                   {{venda.produto}}\n              </ion-col>\n              <ion-col class="brd">\n                  <ion-label style="font-weight: bold">Tipo de Venda:</ion-label>\n                   {{venda.tipoVenda}}\n              </ion-col>\n              <ion-col class="brd">\n                  <ion-label style="font-weight: bold">Valor Venda:</ion-label>\n                   {{venda.valorVenda}}\n              </ion-col>\n              <ion-col  class="brd">\n                  <ion-label style="font-weight: bold">Data:</ion-label>\n                   {{venda.dataVenda}}\n              </ion-col>\n            </ion-row>\n            <ion-row class="brd margem" >\n                <ion-col col-12 class="brd">\n                    <font style=\'font-weight:bold;\'> Nro de Vendas: </font>\n                     {{total}}\n                </ion-col>\n                <ion-col col-12 class="brd">\n                    <font style=\'font-weight:bold;\'> Total Recebido: </font>\n                     {{totalValor | currency}}\n                </ion-col>\n\n            </ion-row>\n          </ion-grid>\n      </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\relatorio-caixa\relatorio-caixa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RelatorioCaixaPage);
    return RelatorioCaixaPage;
}());

//# sourceMappingURL=relatorio-caixa.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Venda; });
var Venda = /** @class */ (function () {
    function Venda() {
    }
    return Venda;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Início" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Sobre" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contato" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="assets/imgs/logo-dataservice.JPG" alt="Logo" class="page-about">\n</ion-content>\n'/*ion-inline-end:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contato\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Siga-nos nas redes sociais !</ion-list-header>\n    <br><br>\n    <ion-item>\n      <ion-icon name="logo-facebook" item-start></ion-icon>\n      www.facebook.com/dataservisbq\n    </ion-item>\n    <ion-item>\n      <ion-icon name="logo-whatsapp" item-start></ion-icon>\n      (32)98408-2931\n    </ion-item>\n    <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n        (32)98408-2931\n    </ion-item>\n    <ion-item>\n        <ion-icon name="navigate" item-start></ion-icon>\n        Rua Olegário Maciel,470 - Loja 6 <br> Barbacena/MG <br> CEP 36200-082\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graficos_graficos__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fecha_caixa_fecha_caixa__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.irParaFecharCaixa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__fecha_caixa_fecha_caixa__["a" /* FechaCaixaPage */]);
    };
    HomePage.prototype.irParaGraficos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__graficos_graficos__["a" /* GraficosPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Início</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <ion-grid>\n      <ion-row align-items: center>\n        <ion-col text-center>\n          <br><br><br>\n          <button ion-button full icon-start round (click)="irParaFecharCaixa()">\n            <ion-icon name="ios-cash-outline"></ion-icon>\n            Fechamento de Caixa\n          </button>\n          <br>\n          <br>\n          <button ion-button full icon-start round (click)="irParaGraficos()">\n            <ion-icon name="ios-analytics-outline"></ion-icon>\n            Gráficos\n          </button>\n          <br>\n          <br>\n          <button ion-button full icon-start round >\n            <ion-icon name="ios-contacts-outline"></ion-icon>\n            Clientes\n          </button>\n          <br>\n          <br>\n          <button ion-button full icon-start round >\n            <ion-icon name="ios-alert-outline"></ion-icon>\n            Aviso de Estoque\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FechaCaixaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__relatorio_caixa_relatorio_caixa__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_fecha_caixa_service_fecha_caixa_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_model_model__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FechaCaixaPage = /** @class */ (function () {
    function FechaCaixaPage(modalCtrl, menu, navCtrl, fechaCaixaService) {
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.fechaCaixaService = fechaCaixaService;
        this.DECIMAL_SEPARATOR = ".";
        this.GROUP_SEPARATOR = ",";
        this.isenabled = false;
        this.venda = new __WEBPACK_IMPORTED_MODULE_4__app_model_model__["a" /* Venda */]();
    }
    FechaCaixaPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    FechaCaixaPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    FechaCaixaPage.prototype.format = function (valString) {
        if (!valString) {
            return '';
        }
        var val = valString.toString();
        var parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
        this.pureResult = parts;
        if (parts[0].length <= 11) {
            this.maskedId = this.cpf_mask(parts[0]);
            return this.maskedId;
        }
        else {
            this.maskedId = this.cnpj(parts[0]);
            return this.maskedId;
        }
    };
    ;
    FechaCaixaPage.prototype.unFormat = function (val) {
        if (!val) {
            return '';
        }
        val = val.replace(/\D/g, '');
        if (this.GROUP_SEPARATOR === ',') {
            return val.replace(/,/g, '');
        }
        else {
            return val.replace(/\./g, '');
        }
    };
    ;
    FechaCaixaPage.prototype.cpf_mask = function (v) {
        v = v.replace(/\D/g, ''); //Remove all that is not digits
        v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit
        v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Insert a dot between the third and quarter digit again
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Insert an dash between the third and quarter digit
        return v;
    };
    FechaCaixaPage.prototype.cnpj = function (v) {
        v = v.replace(/\D/g, ''); //Remove all that is not digits
        v = v.replace(/^(\d{2})(\d)/, '$1.$2'); //Insert a dot between the second and third digits
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); //Insert a dot between the fifth and sixth digits
        v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); //Insert a slash between the eighth and ninth digits
        v = v.replace(/(\d{4})(\d)/, '$1-$2'); //Insert an dash after the quarter digit
        return v;
    };
    FechaCaixaPage.prototype.pesquisar = function (form) {
        //console.log(this.venda);
        this.buscarVendas(this.venda);
    };
    FechaCaixaPage.prototype.buscarVendas = function (venda) {
        var _this = this;
        this.fechaCaixaService.buscarVendas(venda).then(function (vendas) {
            _this.vendas = vendas;
            console.log(_this.vendas);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__relatorio_caixa_relatorio_caixa__["a" /* RelatorioCaixaPage */], {
                vendas: _this.vendas
            });
        });
    };
    FechaCaixaPage.prototype.getvalida = function () {
        if (this.venda.cpfCnpj != '' && !this.venda.dataVenda) {
            return true;
        }
        else {
            return false;
        }
    };
    FechaCaixaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-fecha-caixa',template:/*ion-inline-start:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\fecha-caixa\fecha-caixa.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fechamento de Caixa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <br><br>\n    <form #f="ngForm" (ngSubmit)="pesquisar(f)">\n    <ion-grid>\n        <ion-row align-items: center>\n          <ion-col text-center>\n              <ion-item>\n                  <ion-label floating>CPF/CNPJ</ion-label>\n                  <ion-input [(ngModel)]="venda.cpfCnpj" (blur)="venda.cpfCnpj = format(venda.cpfCnpj)" name="cpf_cnpj"></ion-input>\n              </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row align-items: center>\n            <ion-col text-center>\n              <ion-item>\n                  <ion-label>Data</ion-label>\n                  <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="venda.dataVenda" name="dataVenda">\n                  </ion-datetime>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row align-items: center>\n              <ion-col text-center>\n                  <ion-list radio-group [(ngModel)]="venda.tipoVenda" name="tipoVenda" #tipoVenda="ngModel">\n                      <ion-item>\n                        <ion-label>Cartão</ion-label>\n                        <ion-radio value="1" checked></ion-radio>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>Cartão / À Vista</ion-label>\n                        <ion-radio value="2"></ion-radio>\n                      </ion-item>\n                    </ion-list>\n              </ion-col>\n            </ion-row>\n            <br>\n            <button ion-button round type="submit" [disabled]="getvalida()" >Pesquisar</button>\n      </ion-grid>\n\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\pages\fecha-caixa\fecha-caixa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_fecha_caixa_service_fecha_caixa_service__["a" /* FechaCaixaServiceProvider */]])
    ], FechaCaixaPage);
    return FechaCaixaPage;
}());

//# sourceMappingURL=fecha-caixa.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FechaCaixaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FechaCaixaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FechaCaixaServiceProvider = /** @class */ (function () {
    function FechaCaixaServiceProvider(http) {
        this.http = http;
        //console.log('Hello FechaCaixaServiceProvider Provider');
    }
    FechaCaixaServiceProvider.prototype.buscarVendas = function (venda) {
        var url = "https://my-json-server.typicode.com/geovannigava/dataservistestes/vendas?";
        venda.cpfCnpj = this.tiraTracoPontoBarra(venda.cpfCnpj);
        if (venda.tipoVenda == 1) {
            url = url + "cpfCnpj=" + venda.cpfCnpj + "&dataVenda=" + venda.dataVenda + "&tipoVenda=1";
        }
        else {
            url = url + "cpfCnpj=" + venda.cpfCnpj + "&dataVenda=" + venda.dataVenda;
        }
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    FechaCaixaServiceProvider.prototype.tiraTracoPontoBarra = function (cpfCnpj) {
        var novoCPF = cpfCnpj.replace(/[^\d]+/g, '');
        return novoCPF;
    };
    FechaCaixaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], FechaCaixaServiceProvider);
    return FechaCaixaServiceProvider;
}());

//# sourceMappingURL=fecha-caixa-service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_graficos_graficos__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_relatorio_caixa_relatorio_caixa__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_fecha_caixa_fecha_caixa__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_fecha_caixa_service_fecha_caixa_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_fecha_caixa_fecha_caixa__["a" /* FechaCaixaPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_relatorio_caixa_relatorio_caixa__["a" /* RelatorioCaixaPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_graficos_graficos__["a" /* GraficosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_fecha_caixa_fecha_caixa__["a" /* FechaCaixaPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_relatorio_caixa_relatorio_caixa__["a" /* RelatorioCaixaPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_graficos_graficos__["a" /* GraficosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_fecha_caixa_service_fecha_caixa_service__["a" /* FechaCaixaServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\sisema5\Documents\prototipoApp\prototipo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 217,
	"./af.js": 217,
	"./ar": 218,
	"./ar-dz": 219,
	"./ar-dz.js": 219,
	"./ar-kw": 220,
	"./ar-kw.js": 220,
	"./ar-ly": 221,
	"./ar-ly.js": 221,
	"./ar-ma": 222,
	"./ar-ma.js": 222,
	"./ar-sa": 223,
	"./ar-sa.js": 223,
	"./ar-tn": 224,
	"./ar-tn.js": 224,
	"./ar.js": 218,
	"./az": 225,
	"./az.js": 225,
	"./be": 226,
	"./be.js": 226,
	"./bg": 227,
	"./bg.js": 227,
	"./bm": 228,
	"./bm.js": 228,
	"./bn": 229,
	"./bn.js": 229,
	"./bo": 230,
	"./bo.js": 230,
	"./br": 231,
	"./br.js": 231,
	"./bs": 232,
	"./bs.js": 232,
	"./ca": 233,
	"./ca.js": 233,
	"./cs": 234,
	"./cs.js": 234,
	"./cv": 235,
	"./cv.js": 235,
	"./cy": 236,
	"./cy.js": 236,
	"./da": 237,
	"./da.js": 237,
	"./de": 238,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 238,
	"./dv": 241,
	"./dv.js": 241,
	"./el": 242,
	"./el.js": 242,
	"./en-au": 243,
	"./en-au.js": 243,
	"./en-ca": 244,
	"./en-ca.js": 244,
	"./en-gb": 245,
	"./en-gb.js": 245,
	"./en-ie": 246,
	"./en-ie.js": 246,
	"./en-il": 247,
	"./en-il.js": 247,
	"./en-nz": 248,
	"./en-nz.js": 248,
	"./eo": 249,
	"./eo.js": 249,
	"./es": 250,
	"./es-do": 251,
	"./es-do.js": 251,
	"./es-us": 252,
	"./es-us.js": 252,
	"./es.js": 250,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./gu": 265,
	"./gu.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mn": 290,
	"./mn.js": 290,
	"./mr": 291,
	"./mr.js": 291,
	"./ms": 292,
	"./ms-my": 293,
	"./ms-my.js": 293,
	"./ms.js": 292,
	"./mt": 294,
	"./mt.js": 294,
	"./my": 295,
	"./my.js": 295,
	"./nb": 296,
	"./nb.js": 296,
	"./ne": 297,
	"./ne.js": 297,
	"./nl": 298,
	"./nl-be": 299,
	"./nl-be.js": 299,
	"./nl.js": 298,
	"./nn": 300,
	"./nn.js": 300,
	"./pa-in": 301,
	"./pa-in.js": 301,
	"./pl": 302,
	"./pl.js": 302,
	"./pt": 303,
	"./pt-br": 304,
	"./pt-br.js": 304,
	"./pt.js": 303,
	"./ro": 305,
	"./ro.js": 305,
	"./ru": 306,
	"./ru.js": 306,
	"./sd": 307,
	"./sd.js": 307,
	"./se": 308,
	"./se.js": 308,
	"./si": 309,
	"./si.js": 309,
	"./sk": 310,
	"./sk.js": 310,
	"./sl": 311,
	"./sl.js": 311,
	"./sq": 312,
	"./sq.js": 312,
	"./sr": 313,
	"./sr-cyrl": 314,
	"./sr-cyrl.js": 314,
	"./sr.js": 313,
	"./ss": 315,
	"./ss.js": 315,
	"./sv": 316,
	"./sv.js": 316,
	"./sw": 317,
	"./sw.js": 317,
	"./ta": 318,
	"./ta.js": 318,
	"./te": 319,
	"./te.js": 319,
	"./tet": 320,
	"./tet.js": 320,
	"./tg": 321,
	"./tg.js": 321,
	"./th": 322,
	"./th.js": 322,
	"./tl-ph": 323,
	"./tl-ph.js": 323,
	"./tlh": 324,
	"./tlh.js": 324,
	"./tr": 325,
	"./tr.js": 325,
	"./tzl": 326,
	"./tzl.js": 326,
	"./tzm": 327,
	"./tzm-latn": 328,
	"./tzm-latn.js": 328,
	"./tzm.js": 327,
	"./ug-cn": 329,
	"./ug-cn.js": 329,
	"./uk": 330,
	"./uk.js": 330,
	"./ur": 331,
	"./ur.js": 331,
	"./uz": 332,
	"./uz-latn": 333,
	"./uz-latn.js": 333,
	"./uz.js": 332,
	"./vi": 334,
	"./vi.js": 334,
	"./x-pseudo": 335,
	"./x-pseudo.js": 335,
	"./yo": 336,
	"./yo.js": 336,
	"./zh-cn": 337,
	"./zh-cn.js": 337,
	"./zh-hk": 338,
	"./zh-hk.js": 338,
	"./zh-tw": 339,
	"./zh-tw.js": 339
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 445;

/***/ })

},[340]);
//# sourceMappingURL=main.js.map