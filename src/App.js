import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import AppContext from './context';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  // const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [ProductsResponse, cartResponse] = await Promise.all([
          axios.get('products.json'),
          axios.get('cart.json'),
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

  const onAddToCart = async (obj) => {
    try {
      // const findItem = cartProducts.find((item) => Number(item.parentId) === Number(obj.id));
      // if (findItem) {
      //   setCartProducts((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
      //   await axios.delete(`cart.json/${findItem.id}`);
      // } else {
      setCartProducts((prev) => [...prev, obj]);
      console.log('123');
      const { data } = await axios.post('cart.json', obj);
      setCartProducts((prev) =>
        prev.map((product) => {
          if (product.id === data.id) {
            return {
              ...product,
              id: data.id,
            };
          }
          return product;
        }),
      );
    } catch (error) {
      alert('Unable to add to cart');
      console.error(error);
    }
  };

  const onRemoveProduct = (id) => {
    try {
      axios.delete(`cart.json/${id}`);
      setCartProducts((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Unable to remove item from cart');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isProductAdded = (id) => {
    return cartProducts.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartProducts,
        isProductAdded,
        onAddToCart,
        setCartProducts,
      }}>
      <div className="clear">
        <Header />
        <div className="wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  cartProducts={cartProducts}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  onChangeSearchInput={onChangeSearchInput}
                  onAddToCart={onAddToCart}
                  isLoading={isLoading}
                />
              }
              exact
            />
            <Route
              path="/cart"
              element={<Cart products={cartProducts} onRemove={onRemoveProduct} />}
              exact
            />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
