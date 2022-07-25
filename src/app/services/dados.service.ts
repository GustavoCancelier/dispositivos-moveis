import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any;
  private compras=[];


  constructor() {
    this.dados=[
      {
        nome: 'Carne',
        valor: 42
      },
      {
        nome: 'Cerveja',
        valor: 30
      },
      {
        nome: 'Pão',
        valor: 0.25
      }
    ];

  }
  inserirCompra(nome: string,  descricao: string){
    const index = this.dados.findIndex(it => it.nome === nome);
    const valor2 = this.dados[index].valor;
    this.compras.push({nome,descricao, valor2});
  }
 
  carregarTodasCompras(): any[]{
    console.log('sla',this.compras);
    return this.compras;
  }

  
  inserirDado(nome: string, valor: any): boolean{
    if(nome){      
      this.dados.push({nome,valor});
      return true;
    }
    else{
      return false;
    }
  }

  
  carregarTodosDados(): any[]{
    console.log(this.dados);
    return this.dados;
  }
}
