import { useEffect } from "preact/hooks";
import { useUserState } from "./context/GlobalContentAPI";
import { HomePage, NewUserPage } from "./pages";
import { Buffer } from "buffer";

const App = () => {
  const { seed } = useUserState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Buffer = Buffer;
    }
  }, []);

  return <div>{seed ? <HomePage /> : <NewUserPage />}</div>;
};

export default App;
