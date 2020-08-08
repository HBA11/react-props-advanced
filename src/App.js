import React from 'react';
import ProductTable from './Component/ProductTable';
import './App.css';

const products=[
  {name:"TV", price:100, category:"Electronics"},
  {name:"Microwave", price:300, category:"Electronics"},
  {name:"T-shirt", price:20, category:"Clothes"},
  {name:"Trousers", price:40, category:"Clothes"}
]
function App() {
  return (
    <div className="App">
      <ProductTable products={products}>



      </ProductTable>
    </div>
  );
}

export default App;
