import React, { useState, useEffect } from 'react';
import jsonDataProducts from '../Assets/data/product.json';
import { uid } from 'react-uid';

const Products = () => {
  const [products, setproducts] = useState([]);
  const [amountEntries, setAmountEntries] = useState(5);
  const [view, setView] = useState('table');
  const [errors, setErrors] = useState('');

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomIntWDecimal = (max) => {
    return Math.random() * max;
  };

  const fillState = () => {
    const product = {
      id: '',
      name: '',
      price: '',
      stock: ''
    };

    product.name = jsonDataProducts.adjective[getRandomInt(jsonDataProducts.adjective.length)] + ' ' + jsonDataProducts.nouns[getRandomInt(jsonDataProducts.nouns.length)];
    product.price = Math.round(getRandomIntWDecimal(100) * 100) / 100;
    product.stock = getRandomInt(100);
    setproducts((products) => [...products, product]);
  };

  const getData = () => {
    setproducts([]);
    if (amountEntries > 2000) {
      setErrors('Max amount of entries = 2000.');
      return;
    } else if (amountEntries < 0) {
      setErrors('Value cannot be negative.');
      return;
    } else {
      for (let i = 0; i < amountEntries; i++) {
        fillState();
      }
    }
  };

  useEffect(() => {
    setAmountEntries(5);
    for (let i = 0; i < 5; i++) {
      fillState();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="layout">
      <div className="data">
        <div className="data__intro">
        <svg width="62" height="68" viewBox="0 0 62 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59 16.7778L31 3L3 16.7778M59 16.7778L31 30.5556M59 16.7778V51.2222L31 65M3 16.7778L31 30.5556M3 16.7778V51.2222L31 65M31 30.5556V65" stroke="#41454E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <h2 className="data__intro--title">Fake Product Data Generator</h2>
          <p className="data__intro--text">
            This webapp provides you fake product data you can use in your own
            application! Just select your options and generate data!
          </p>
        </div>
        <div className="data__form">
          <div className="data__form--entries">
            <p className="data__form--entries--title">Amount of entries</p>
            
            <div className="entries__wrapper">
              <input
                className="data__form--entries--input"
                type="number"
                onChange={(e) => {
                  setErrors('')
                  setAmountEntries(e.target.value)
                }}
                value={amountEntries}
                max="2500"
              />
              <button
                className="data__form--entries--button"
                onClick={() => getData()}
              >
                <svg
                  width="23"
                  height="19"
                  viewBox="0 0 23 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6111 2L21 9.5M21 9.5L13.6111 17M21 9.5H2"
                    stroke="#333333"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {
              errors ? (
                <p className="error">{errors}</p>
              ): (
                <></>
              )
            }
          </div>
          <div className="data__form--view">
            <button
              className={
                view === 'table'
                  ? `data__form--view-button btn-active`
                  : `data__form--view-button`
              }
              onClick={() => setView('table')}
            >
              <svg
                width="26"
                height="18"
                viewBox="0 0 26 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.33333H25H1ZM1 11.6667H25H1ZM13 6.33333V17V6.33333ZM3.66667 17H22.3333C23.0406 17 23.7189 16.719 24.219 16.219C24.719 15.7189 25 15.0406 25 14.3333V3.66667C25 2.95942 24.719 2.28115 24.219 1.78105C23.7189 1.28095 23.0406 1 22.3333 1H3.66667C2.95942 1 2.28115 1.28095 1.78105 1.78105C1.28095 2.28115 1 2.95942 1 3.66667V14.3333C1 15.0406 1.28095 15.7189 1.78105 16.219C2.28115 16.719 2.95942 17 3.66667 17Z"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={
                view === 'json'
                  ? `data__form--view-button data__form--view-button-margin btn-active`
                  : `data__form--view-button data__form--view-button-margin`
              }
              onClick={() => setView('json')}
            >
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6 22L16.4 2M21.2 7L26 12L21.2 17M6.8 17L2 12L6.8 7"
                  stroke="#333333"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {view === 'table' ? (
          products.length !== 0 ? (
            <div className="data__table">
              <div className="data__table--head-products">
                <p className="data__table--head-text">Name</p>
                <p className="data__table--head-text">Price</p>
                <p className="data__table--head-text">Stock</p>
              </div>
              {products.map((product) => {
                return (
                  <div className="data__table--item-products" key={uid(product)}>
                    <p className="data__table--item-text">{product.name}</p>
                    <p className="data__table--item-text">{product.price}</p>
                    <p className="data__table--item-text">{product.stock}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )
        ) : (
          <div className="data__code">
            <p className="data__code--code">{'['}</p>
            {products.map((product) => {
              return (
                <div key={uid(product)}>
                  <span className="data__code--code data__code--code-indent">
                    {'{'}
                  </span>
                  <p className="data__code--code data__code--code-double-indent">
                    "id": "{uid(product)}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "name": "{product.name}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "price": "{product.price}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "stock": "{product.stock}",{' '}
                  </p>
                  <span className="data__code--code data__code--code-indent">
                    {'},'}
                  </span>
                </div>
              );
            })}

            <p className="data__code--code">{']'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;