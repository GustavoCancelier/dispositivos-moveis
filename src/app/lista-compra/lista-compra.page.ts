import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage implements OnInit {

  private compras: any;
  private produto={
    nome: '',
    descricao: '',
    valor: 1,
  };
  private produtos: any[];
  private novaCompra={
    nome: '',
    descricao: '',
    valor: 1
  };
  private valueSelect: any;

  constructor(public dadosService: DadosService) { }

  //Em ngOnInit são carregados os dados disponíveis em dadosService
  ngOnInit() {
    
    this.produtos=this.dadosService.carregarTodosDados();    
  }
  //Em inserir() são usados métodos de dadosService para inserção de compromissos
  // e para carregar todos os compromissos cadastrados
  inserir(){
    this.dadosService.inserirCompra(this.novaCompra.nome,this.novaCompra.descricao)
    this.compras=this.dadosService.carregarTodasCompras();
  }
  
  escolheProduto(){
    this.novaCompra.nome=this.valueSelect;
  }

}
