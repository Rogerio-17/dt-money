import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { HeaderTable, PriceHighLight, TransactionsContainer } from "./styles";

import { TransactionTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { dateFormater, priceFormater } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
  const transactions  = useContextSelector(TransactionsContext, context => {
    return(
      context.transactions
    )
  });

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionTable>
          <HeaderTable>
            <td>Descrição</td>
            <td>Preço</td>
            <td>Categoria</td>
            <td>Data</td>
          </HeaderTable>
          {
          
          transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormater.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormater.format(new Date(transaction.createdAt))}</td>
              </tr>
            );
          })
          }
        </TransactionTable>
      </TransactionsContainer>
    </div>
  );
}
