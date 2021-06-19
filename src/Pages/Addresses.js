import React, { useEffect, useState } from 'react';
import jsonDataAddress from '../Assets/data/address.json';
import { uid } from 'react-uid';

const Addresses = () => {
  const [address, setAddress] = useState([]);
  const [errors, setErrors] = useState('');
  const [amountEntries, setAmountEntries] = useState(5);
  const [view, setView] = useState('table');

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const fillState = () => {
    const addressNew = {
      id: '',
      streetname: '',
      number: '',
      country: '',
    };

    addressNew.streetname =
      jsonDataAddress.streetname[
        getRandomInt(jsonDataAddress.streetname.length)
      ];
    addressNew.number = getRandomInt(1000);
    addressNew.country =
      jsonDataAddress.countries[getRandomInt(jsonDataAddress.countries.length)];

    setAddress((address) => [...address, addressNew]);
  };

  const getData = () => {
    setAddress([]);
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
    for (let i = 0; i < amountEntries; i++) {
      fillState();
    }
  }, []);

  return (
    <div className="layout">
      <div className="data">
        <div className="data__intro">
          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 31L9.22222 24.7778M9.22222 24.7778L31 3L52.7778 24.7778M9.22222 24.7778V55.8889C9.22222 56.714 9.55 57.5053 10.1334 58.0888C10.7169 58.6722 11.5082 59 12.3333 59H21.6667M52.7778 24.7778L59 31M52.7778 24.7778V55.8889C52.7778 56.714 52.45 57.5053 51.8666 58.0888C51.2831 58.6722 50.4918 59 49.6667 59H40.3333M21.6667 59C22.4918 59 23.2831 58.6722 23.8666 58.0888C24.45 57.5053 24.7778 56.714 24.7778 55.8889V43.4444C24.7778 42.6193 25.1056 41.828 25.689 41.2446C26.2724 40.6611 27.0638 40.3333 27.8889 40.3333H34.1111C34.9362 40.3333 35.7276 40.6611 36.311 41.2446C36.8944 41.828 37.2222 42.6193 37.2222 43.4444V55.8889C37.2222 56.714 37.55 57.5053 38.1334 58.0888C38.7169 58.6722 39.5082 59 40.3333 59M21.6667 59H40.3333"
              stroke="#41454E"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h2 className="data__intro--title">Fake Address Data Generator</h2>
          <p className="data__intro--text">
            This webapp provides you fake addresses you can use in your own
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
                  setErrors('');
                  setAmountEntries(e.target.value);
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
            {errors ? <p className="error">{errors}</p> : <></>}
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
          address.length !== 0 ? (
            <div className="data__table">
              <div className="data__table--head-addresses">
                <p className="data__table--head-text">Streetname</p>
                <p className="data__table--head-text">Number</p>
                <p className="data__table--head-text">Country</p>
                <p className="data__table--head-text">Code</p>
                <p className="data__table--head-text">Url</p>
              </div>
              {address.map((item) => {
                return (
                  <div className="data__table--item-addresses" key={uid(item)}>
                    <p className="data__table--item-text">
                      {item.streetname}
                    </p>
                    <p className="data__table--item-text">{item.number}</p>
                    <p className="data__table--item-text">{item.country.name}</p>
                    <p className="data__table--item-text">{item.country.code}</p>
                    <a href={`https://www.google.be/maps/place/${item.country.name}`} className="data__table--item-text">
                      https://www.google.be/maps/place/{item.country.name.replace(/\s/g, '')}"
                  </a>
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
            {address.map((item) => {
              return (
                <div key={uid(item)}>
                  <span className="data__code--code data__code--code-indent">
                    {'{'}
                  </span>
                  <p className="data__code--code data__code--code-double-indent">
                    "id": "{uid(item)}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "streetname": "{item.streetname}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "number": "{item.number}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "country": "{item.country.name}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "code": "{item.country.code}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "url": "https://www.google.be/maps/place/{item.country.name.replace(/\s/g, '')}",{' '}
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
};

export default Addresses;
