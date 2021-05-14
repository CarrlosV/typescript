import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negociacao';

export class NegociacoesView extends View<Negociacoes> {

    private static montaTrNegociacao(negociacao: Negociacao): string {
        return `
        <tr>
            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
            <td>${negociacao.volume}</td>                        
        </tr>
        `
    }

    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociacao => NegociacoesView.montaTrNegociacao(negociacao)).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `
    }
}