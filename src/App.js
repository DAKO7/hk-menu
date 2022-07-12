import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';

import Home from './pages/Home';

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [ProductsResponse, cartResponse] = await Promise.all([
          axios.get('products.json'),
          axios.get('products.json'),
        ]);

        setIsLoading(false);

        setCartProducts(cartResponse.data);
        setProducts(ProductsResponse.data);
      } catch (err) {
        alert('');
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="clear">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route
            path=""
            element={
              <Home
                products={products}
                // cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                // onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
            exact
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
