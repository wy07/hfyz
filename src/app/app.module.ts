import { ComponentsModule } from './../components/components.module';
import { UserDataProvider } from './../providers/user-data/user-data';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpService } from '../providers/http-service/http-service';

export function RestangularConfigFactory (RestangularProvider, userDataProvider) {
    RestangularProvider.setBaseUrl('http://192.168.2.155:7004');
    RestangularProvider.setPlainByDefault(true);
    RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params, httpConfig)=> {
        if (path !== 'login' && userDataProvider.getToken() !== '') {
            headers['Authorization'] = 'Bearer ' + userDataProvider.getToken().token;
        }
    });
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    ComponentsModule,

    BrowserModule,
    RestangularModule.forRoot([UserDataProvider], RestangularConfigFactory),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    UserDataProvider,
    HttpService,
  ]
})
export class AppModule {}
