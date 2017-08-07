import { DirectivesModule } from './../directives/directives.module';
import { ComponentsModule } from './../components/components.module';
import { UserDataProvider } from './../providers/user-data/user-data';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { HttpService } from '../providers/http-service/http-service';
import { ScrollableTabsDirective } from '../directives/scrollable-tabs/scrollable-tabs';
import { EventbusProvider } from '../providers/eventbus/eventbus';

export function RestangularConfigFactory (RestangularProvider, userDataProvider) {
    RestangularProvider.setBaseUrl('http://192.168.2.155:7004');
    RestangularProvider.setPlainByDefault(true);
    RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params, httpConfig)=> {
        if (path !== 'login' && userDataProvider.getToken() !== '') {
            headers['Authorization'] = 'Bearer ' + userDataProvider.getToken();
        }
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
  ]
})
export class AppModule {}
