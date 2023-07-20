import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import AuthProvider from "./contexts/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Private from "./routes/Private";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer autoClose={3000} />
          <RoutesApp />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
