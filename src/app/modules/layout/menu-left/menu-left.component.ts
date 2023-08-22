import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {

  displayTipoAposta = false;
  displayContato = false;
  displayAplicativo = false;
  displayRegras = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  pedidos(){
    this.router.navigate(['/pages/pedidos']);
  }

}
