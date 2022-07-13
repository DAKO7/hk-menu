import React from 'react';
import Card from '../components/Card';

function Home({
  products,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  isLoading,
}) {
  //Render all products
  const renderProducts = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(11)] : filteredProducts).map((product, index) => (
      <Card key={index} onAdd={(obj) => onAddToCart(obj)} loading={isLoading} {...product} />
    ));
  };

  return (
    <div>
      <div className="d-flex align-center justify-between mb-40">
        <h2>{searchValue ? `Search: "${searchValue}"` : 'All products'}</h2>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
        </div>
      </div>

      <div className="d-flex flex-wrap justify-between">
        {/* <Card /> */}
        {renderProducts()}
      </div>
    </div>
  );
}

export default Home;
