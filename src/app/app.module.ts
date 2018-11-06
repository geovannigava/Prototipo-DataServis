import { GraficosPage } from './../pages/graficos/graficos';
import { RelatorioCaixaPage } from './../pages/relatorio-caixa/relatorio-caixa';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FechaCaixaPage } from './../pages/fecha-caixa/fecha-caixa';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FechaCaixaServiceProvider } from '../providers/fecha-caixa-service/fecha-caixa-service';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FechaCaixaPage,
    RelatorioCaixaPage,
    GraficosPage,
    TabsPage
  ],
  imports: [
    HttpModule,
    ChartsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FechaCaixaPage,
    RelatorioCaixaPage,
    GraficosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FechaCaixaServiceProvider
  ]
})
export class AppModule {}
