import React, { useState, useEffect } from 'react';
import jsonDataPersons from '../Assets/data/person.json';
import { uid } from 'react-uid';

const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [amountEntries, setAmountEntries] = useState(5);
  const [view, setView] = useState('table');
  const [errors, setErrors] = useState('');

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const fillState = () => {
    const person = {
      id: '',
      name: '',
      lastname: '',
      age: '',
      gender: '',
      nationality: '',
      birthplace: '',
    };

    person.lastname =
      jsonDataPersons.name[getRandomInt(jsonDataPersons.name.length)];
    person.name =
      jsonDataPersons.firstname[getRandomInt(jsonDataPersons.firstname.length)];
    person.age = jsonDataPersons.age[getRandomInt(jsonDataPersons.age.length)];
    person.gender =
      jsonDataPersons.gender[getRandomInt(jsonDataPersons.gender.length)];
    person.nationality =
      jsonDataPersons.nationality[
        getRandomInt(jsonDataPersons.nationality.length)
      ];
    person.birthplace =
      jsonDataPersons.countries[getRandomInt(jsonDataPersons.countries.length)];

    setPersons((persons) => [...persons, person]);
  };

  const getData = () => {
    setPersons([]);
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
  }, []);

  return (
    <div className="layout">
      <div className="data">
        <div className="data__intro">
          <svg
            width="62"
            height="56"
            viewBox="0 0 62 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7778 12.3333H9.22222C7.57199 12.3333 5.98934 12.9889 4.82245 14.1558C3.65555 15.3227 3 16.9053 3 18.5556V46.5556C3 48.2058 3.65555 49.7884 4.82245 50.9553C5.98934 52.1222 7.57199 52.7778 9.22222 52.7778H52.7778C54.428 52.7778 56.0107 52.1222 57.1776 50.9553C58.3444 49.7884 59 48.2058 59 46.5556V18.5556C59 16.9053 58.3444 15.3227 57.1776 14.1558C56.0107 12.9889 54.428 12.3333 52.7778 12.3333H37.2222M24.7778 12.3333V9.22222C24.7778 7.57199 25.4333 5.98934 26.6002 4.82245C27.7671 3.65555 29.3498 3 31 3C32.6502 3 34.2329 3.65555 35.3998 4.82245C36.5667 5.98934 37.2222 7.57199 37.2222 9.22222V12.3333M24.7778 12.3333C24.7778 13.9836 25.4333 15.5662 26.6002 16.7331C27.7671 17.9 29.3498 18.5556 31 18.5556C32.6502 18.5556 34.2329 17.9 35.3998 16.7331C36.5667 15.5662 37.2222 13.9836 37.2222 12.3333M21.6667 37.2222C23.3169 37.2222 24.8995 36.5667 26.0664 35.3998C27.2333 34.2329 27.8889 32.6502 27.8889 31C27.8889 29.3498 27.2333 27.7671 26.0664 26.6002C24.8995 25.4333 23.3169 24.7778 21.6667 24.7778C20.0164 24.7778 18.4338 25.4333 17.2669 26.6002C16.1 27.7671 15.4444 29.3498 15.4444 31C15.4444 32.6502 16.1 34.2329 17.2669 35.3998C18.4338 36.5667 20.0164 37.2222 21.6667 37.2222ZM21.6667 37.2222C25.7298 37.2222 29.1862 39.82 30.4711 43.4444M21.6667 37.2222C19.7359 37.2217 17.8524 37.8197 16.2756 38.9341C14.6988 40.0484 13.5063 41.6242 12.8622 43.4444M40.3333 27.8889H49.6667M40.3333 40.3333H46.5556"
              stroke="#41454E"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="data__intro--title">Fake Person Data Generator</h2>
          <p className="data__intro--text">
            This webapp provides you fake person data you can use in your own
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
          persons.length !== 0 ? (
            <div className="data__table">
              <div className="data__table--head-persons">
                <p className="data__table--head-text">Name</p>
                <p className="data__table--head-text">Lastname</p>
                <p className="data__table--head-text">Age</p>
                <p className="data__table--head-text">Gender</p>
                <p className="data__table--head-text">Nationality</p>
                <p className="data__table--head-text">Birthplace</p>
              </div>
              {persons.map((person) => {
                return (
                  <div className="data__table--item-persons" key={uid(person)}>
                    <p className="data__table--item-text">{person.name}</p>
                    <p className="data__table--item-text">
                      {person.lastname}
                    </p>
                    <p className="data__table--item-text">{person.age}</p>
                    <p className="data__table--item-text">{person.gender}</p>
                    <p className="data__table--item-text">
                      {person.nationality}
                    </p>
                    <p className="data__table--item-text">
                      {person.birthplace.name}
                    </p>
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
            {persons.map((person) => {
              return (
                <div key={uid(person)}>
                  <span className="data__code--code data__code--code-indent">
                    {'{'}
                  </span>
                  <p className="data__code--code data__code--code-double-indent">
                    "id": "{uid(person)}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "name": "{person.name}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "lastname": "{person.lastname}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "age": {person.age},{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "gender": "{person.gender}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "nationality": "{person.nationality}",{' '}
                  </p>
                  <p className="data__code--code data__code--code-double-indent">
                    "birthplace": "{person.birthplace.name}",{' '}
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

export default Persons;
