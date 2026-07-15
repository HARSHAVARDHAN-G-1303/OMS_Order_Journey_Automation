import { useState } from "react";
import Home from "./pages/Home";
import CreateOrder from "./pages/CreateOrder";
import PackShipment from "./pages/PackShipment";
function App() {
  const [page, setPage] = useState("home");
 
  return (
    <>
      {page === "home" && (
        <Home
          openCreateOrder={() => setPage("createOrder")}
          openPackShipment={() => setPage("packShipment")}
        />
      )}
      {page === "createOrder" && (
        <CreateOrder
          goBack={() => setPage("home")}
        />
      )}
      {page === "packShipment" && (
        <PackShipment
          goBack={() => setPage("home")}
        />
      )}
    </> 
  );
}
 
export default App;
 