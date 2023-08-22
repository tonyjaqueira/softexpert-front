import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Item } from 'src/app/model/Item';
import { Pedido } from 'src/app/model/Pedido';
import { Rateio } from 'src/app/model/Rateio';
import { MessageHandlerService } from 'src/app/services/message-handler.service';
import { PedidoServiceService } from 'src/app/services/pedido-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  taxaEntrega: number;

  desconto: number;

  displayDialog: boolean;

  item: Item;

  selectedItem: Item;

  newItem: boolean;

  itens: Item[];

  cols: any[];

  colsCliente: any[];

  rateio: Rateio;

  constructor(private pedidoService: PedidoServiceService,
              private spinnerService: NgxSpinnerService,
              private messageService: MessageHandlerService
    ) { }

  ngOnInit(): void {
    this.rateio = new Rateio;
    this.itens = [];
    this.cols = [
      { field: 'descricao', header: 'Item' },
      { field: 'valorItem', header: 'Valor' },
      { field: 'cliente', header: 'Cliente'}
    ];
    this.colsCliente = [
      { field: 'cliente', header: 'Cliente' },
      { field: 'valor', header: 'Valor' },
      { field: 'link', header: 'Link Pagtº'}
    ];
  }

  showDialogToAdd() {
    this.newItem = true;
    this.item = new Item;
    this.displayDialog = true;
  }

save() {
    let itens = this.itens;
    if (this.newItem)
        itens.push(this.item);
    else
        itens[this.itens.indexOf(this.selectedItem)] = this.item;

    this.itens = itens;
    this.item = null;
    this.displayDialog = false;
}

calcular() {
  this.spinnerService.show();
  if(this.itens.length === 0){
    this.messageService.informacaoMensagem('A lista de itens não pode ser vazia!');
    this.spinnerService.hide();
    return;
  }
  let pedido = new Pedido();
  pedido.itensPedido = this.itens;
  pedido.valorDesconto = this.desconto === undefined ? 0 : this.desconto;
  pedido.valorEntrega = this.taxaEntrega === undefined ? 0 : this.taxaEntrega;
  this.pedidoService.calcularPedido(pedido).subscribe(rateio =>  {
      this.rateio = rateio;
      this.spinnerService.hide();
  }, error => {
    this.messageService.informacaoMensagem('Ocorreu um erro ao calcular o pedido!');
    this.spinnerService.hide();
  })
}

delete() {
    let index = this.itens.indexOf(this.selectedItem);
    this.itens = this.itens.filter((val, i) => i != index);
    this.item = null;
    this.displayDialog = false;
}

onRowSelect(event) {
    this.newItem = false;
    this.item = this.cloneItem(event.data);
    this.displayDialog = true;
}

cloneItem(c: any): any {
    let car = {};
    for (let prop in c) {
        car[prop] = c[prop];
    }
    return car;
}

mascaraMonetaria(valor: any){
    if(valor !== null && valor !== undefined){
      return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }else{
      return "R$ 0,00";
    }
}

}
