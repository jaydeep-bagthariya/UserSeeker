import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import AppRouter from "./routes/AppRouter";
import { SearchHistoryProvider } from "./components/search-history-context";

function App() {
  return (
    <SearchHistoryProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRouter />
      </ThemeProvider>
    </SearchHistoryProvider>
  );
}

export default App;
