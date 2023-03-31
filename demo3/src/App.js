import { useLocation } from "react-router-dom";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import ProductRoutes from "./ProductRoutes";

function App() {
  const myPath = useLocation().pathname;
  const notFoundMatch = /^\/(product|product\/\d+|product\/\d+\/edit)?$/.test(
    myPath
  );
  return (
    <div>
      {notFoundMatch && <MyNavbar />}
      <ProductRoutes />
      {notFoundMatch && <MyFooter />}
    </div>
  );
}

export default App;
