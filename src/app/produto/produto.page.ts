import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  private produtos: any;
  private novoProduto={
    nome: '',
    valor: 0
  };
  
  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.produtos=this.dadosService.carregarTodosDados();
  }
  inserir(){
    this.dadosService.inserirDado(this.novoProduto.nome,this.novoProduto.valor);
    this.produtos=this.dadosService.carregarTodosDados();
  }

}
