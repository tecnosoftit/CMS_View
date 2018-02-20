import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { AgmCoreModule } from '@agm/core';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import {
  ApiService,
  JwtService,
  UserService,
  HttpTokenInterceptor,
  GeneralService
} from './core';
import { CoreModule } from './core/core.module';
import { LeftPanelComponent } from './layouts/admin/left-panel/left-panel.component';
import { FooterComponent } from './layouts/admin/footer/footer.component';
import { HeaderComponent } from './layouts/admin/header/header.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LeftPanelComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'YOURAPIKEY' }),
    CoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    JwtService,
    UserService,
    GeneralService,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
