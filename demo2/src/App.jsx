import './App.css';
// import MyFooter from './components/MyFooter/MyFooter';
// import MyNav from './components/MyNav/MyNav';
// import MySlider from './components/MySlider/MySlider';
// import Products from './components/Products/Products';
import AddStudent from './components/AddStudent';
import Search from './components/Search';



function App() {
  return (
    <div className="App">
      {/* <MyNav></MyNav>
      <MySlider></MySlider>
      <Products></Products>
      <MyFooter></MyFooter> */}
      <h1>Add Student Task</h1>
      <AddStudent></AddStudent>
      <h1>Search Task</h1>
      <Search></Search> 
    </div>
  );
}

export default App;  

