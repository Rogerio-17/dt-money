import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions/Index";
import { TransactionsProvider } from "./contexts/TransactionContext";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
      <Transactions/>
      </TransactionsProvider>
      <GlobalStyle />
      
    </ThemeProvider>
  );
}
