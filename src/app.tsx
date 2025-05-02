import { ThemeProvider } from "./components/theme-provider";
import { UserProvider } from "./context/GlobalContentAPI";
import { HomePage } from "./pages";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HomePage />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
