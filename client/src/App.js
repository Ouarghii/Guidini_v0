import logo from './logo.svg';
import './App.css';
import Authentification from './Component/Authentification/Authentification';
import ProductsTable from './Component/Products/Products';
import Products from './Component/Products/Products';
import MyComponent from './Component/MenuSideBar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <Authentification /> */}
      {/* <ProductsTable /> */}
      <Products/>
      {/* <MyComponent/> */}
    </div>
  );
}

export default App;
