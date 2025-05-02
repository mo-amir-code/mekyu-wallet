import { UserProvider } from "@/context/GlobalContentAPI";
import { ThemeProvider } from "./theme-provider";
import { ReactNode } from "preact/compat";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </UserProvider>
  );
};

export default Provider;
