import { NgxSpinnerModule } from 'ngx-spinner';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CarouselModule } from 'primeng/carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TemplateComponent } from './template/template.component';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG, CurrencyMaskConfig } from 'ng2-currency-mask';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { PrincipalComponent } from './principal/principal/principal.component';
import { InputMaskModule } from 'primeng/inputmask';
import {ChartModule} from 'primeng/chart';
import { LayoutModule } from '../layout/layout.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};


@NgModule({
  declarations: [ TemplateComponent, PrincipalComponent, PedidosComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    CurrencyMaskModule,
    InputNumberModule,
    ProgressSpinnerModule,
    NgxSpinnerModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    ToastModule,
    LayoutModule,
    InputMaskModule,
    ChartModule,
    DialogModule,
    ButtonModule
  ],
  providers: [ { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
                 JwtInterceptor],
  exports: [

  ]
})
export class PagesModule { }
