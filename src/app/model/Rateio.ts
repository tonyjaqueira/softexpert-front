import { Pagamento } from "./Pagamento";

export class Rateio {

    valorTotalPedido: number;
    linksPagamento: Pagamento[];
    valorPorPessoa: Map<string, number>;

}