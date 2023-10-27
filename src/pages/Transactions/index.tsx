import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer } from "./styles";

import { TransactionTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { dateFormater, priceFormater } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionTable>
          {transactions.map((transaction) => {
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
          })}
        </TransactionTable>
      </TransactionsContainer>
    </div>
  );
}
