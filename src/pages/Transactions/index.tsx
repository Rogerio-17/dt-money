import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer } from "./styles";

import { TransactionTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionTable>
          <tr>
            <td width="50%">Desenvolvimento de software</td>
            <td>
              <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>25/07/2021</td>
          </tr>
          <tr>
            <td width="50%">Compra de coxinhas</td>
            <td>
              <PriceHighLight variant="outcome">- R$ 1.000,00</PriceHighLight>
            </td>

            <td>Compra</td>
            <td>13/03/2021</td>
          </tr>
          <tr>
            <td width="50%">Escada para anão</td>
            <td>
            <PriceHighLight variant="outcome">- R$ 7.000,00</PriceHighLight>
            </td>
            <td>Pequena compra</td>
            <td>04/02/2021</td>
          </tr>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  );
}
