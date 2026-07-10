import { useState } from "react";
import Home from "./pages/Home";
import CreateOrder from "./pages/CreateOrder";
 
function App() {
  const [page, setPage] = useState("home");
 
  return (
    <>
      {page === "home" ? (
        <Home
          openCreateOrder={() => setPage("createOrder")}
        />
      ) : (
        <CreateOrder
          goBack={() => setPage("home")}
        />
      )}
    </>
  );
}
 
export default App;
 