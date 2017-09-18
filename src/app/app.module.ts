import { DirectivesModule } from './../directives/directives.module';
import { ComponentsModule } from './../components/components.module';
import { UserDataProvider } from './../providers/user-data/user-data';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RestangularModule } from 'ngx-restangular';
import { CityPickerModule } from  "ionic2-city-picker";

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { HttpService } from '../providers/http-service/http-service';
import { ScrollableTabsDirective } from '../directives/scrollable-tabs/scrollable-tabs';
import { EventbusProvider } from '../providers/eventbus/eventbus';
import { MapProvider } from '../providers/map/map';
import {DatePipe} from "@angular/common";

export function RestangularConfigFactory (RestangularProvider, userDataProvider) {
    /*RestangularProvider.setBaseUrl('http://localhost:7004');*/
    RestangularProvider.setBaseUrl('http://127.0.0.1:7001');
    /*RestangularProvider.setBaseUrl('http://220.178.80.119:7001');*/
    RestangularProvider.setPlainByDefault(true);
    RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params, httpConfig)=> {
        if (path !== 'login' && userDataProvider.getToken() !== '') {
            headers['Authorization'] = 'Bearer ' + userDataProvider.getToken();
        }
        console.log('Request Element: ' + JSON.stringify(element));
    });
}

@NgModule({
  declarations: [
    MyApp,
    ScrollableTabsDirective
  ],
  imports: [
    ComponentsModule,
    DirectivesModule,
    CityPickerModule,

    BrowserModule,
    RestangularModule.forRoot([UserDataProvider], RestangularConfigFactory),
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    BackgroundMode,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    UserDataProvider,
    HttpService,
    EventbusProvider,
    MapProvider,
    DatePipe
  ]
})
export class AppModule {}
