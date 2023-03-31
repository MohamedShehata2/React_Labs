import "./App.css";
import { MyNav } from "./MyNav/MyNav";
import Slider from "./Slider/Slider";
import Products from "./Products/Products";
import MyFooter from "./MyFooter/MyFooter";

function App() {
  return (
    <div>
      <MyNav/>
      <Slider/>
      <Products/>
      <MyFooter/>
    </div>
  );
}

export default App;
