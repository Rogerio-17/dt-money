import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions/Index";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions/>
      <GlobalStyle />
      
    </ThemeProvider>
  );
}
