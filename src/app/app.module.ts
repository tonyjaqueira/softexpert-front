import { LayoutModule } from './modules/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './modules/pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { ConfirmationService, MessageService } from 'primeng/api';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { MessageHandlerService } from './services/message-handler.service';

import {ChartModule} from 'primeng/chart';

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ChartModule,
    PagesModule
    
  ],
  providers: [ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    JwtHelperService,
    MessageHandlerService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
