import React from 'react';

import styles from './Card.module.scss';

export default function Card({ id, name, image, price, description, rating }) {
  const [isOpened, setIsOpened] = React.useState(false);
  const [selectedProducts, setSelectedProducts] = React.useState(1);
  // const [price, setPrice] = React.useState(9.99);
  const [totalToCart, setTotalToCart] = React.useState(0);

  const obj = { id, parentId: id, name, image, price, description, rating };

  const productDetailedInfo = () => {
    setIsOpened(!isOpened);
    calcTotalToCart();
  };

  const addToCart = () => {
    console.log('added');
  };

  const addOneProduct = () => {
    setSelectedProducts(selectedProducts + 1);
  };

  const removeOneProduct = () => {
    setSelectedProducts(selectedProducts - 1);
  };

  const calcTotalToCart = () => {
    setTotalToCart(price * selectedProducts);
  };

  return (
    <>
      <div className={`${styles.overlay} ${isOpened ? styles.overlayVisible : ''}`}>
        <div
          onClick={productDetailedInfo}
          className={`${styles.overlayLayerTwo} ${isOpened ? styles.overlayVisible : ''}`}></div>
        <div className={`${styles.overlayCard}`}>
          <img
            className={styles.overlayCardImg}
            width="100%"
            height={'auto'}
            src={image}
            alt="food"
          />
          <div className={`${styles.overlayCardInfo} ${'d-flex flex-column p-20'}`}>
            <div
              className={`${
                styles.overlayCardInfoHeader
              } ${'d-flex justify-between align-center'}`}>
              <h3>{name}</h3>
              <b className="d-flex align-center">
                <img className="mr-5" width={16} height={16} src="/img/rating.svg" alt="rating" />
                {rating}
              </b>
            </div>
            <div className={`${styles.overlayCardInfoBody} ${'d-flex flex-column'}`}>
              <span>{price} €</span>
              <p>{description}</p>
            </div>
            <div className={`${styles.overlayCardInfoFooter} ${'d-flex align-center mt-20'}`}>
              <div
                className={`${styles.countButton} ${'d-flex justify-between align-center p-10'}`}>
                <img
                  onClick={selectedProducts > 1 ? removeOneProduct : ''}
                  className={
                    selectedProducts > 1 ? `${styles.enableButton}` : `${styles.disableButton}`
                  }
                  width={20}
                  height={20}
                  src="/img/minus.svg"
                  alt="minus"
                />
                {selectedProducts}
                <img
                  onClick={addOneProduct}
                  className={styles.enableButton}
                  width={20}
                  height={20}
                  src="/img/plus.svg"
                  alt="plus"
                />
              </div>
              <button
                onClick={addToCart}
                className={`${styles.bigAddButton} ${'d-flex flex-column justify-around p-5'}`}>
                Add
                <span>{totalToCart} €</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <img onClick={productDetailedInfo} width="100%" height={170} src={image} alt="food" />
        <div className="d-flex flex-column">
          <h4>{name}</h4>
          <div className="d-flex justify-between align-center">
            <span>{price} €</span>
            <button onClick={addToCart} className={styles.addButton}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
