import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';

const Navigation = () => {
  return (
    <div className="layout">
      <nav className="navigation">
        <Link to="/fake-person">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42 21C42 26.5695 39.7875 31.911 35.8492 35.8492C31.911 39.7875 26.5695 42 21 42C15.4305 42 10.089 39.7875 6.15076 35.8492C2.21249 31.911 0 26.5695 0 21C0 15.4305 2.21249 10.089 6.15076 6.15076C10.089 2.21249 15.4305 0 21 0C26.5695 0 31.911 2.21249 35.8492 6.15076C39.7875 10.089 42 15.4305 42 21V21ZM23.625 10.5C23.625 11.1962 23.3484 11.8639 22.8562 12.3562C22.3639 12.8484 21.6962 13.125 21 13.125C20.3038 13.125 19.6361 12.8484 19.1438 12.3562C18.6516 11.8639 18.375 11.1962 18.375 10.5C18.375 9.80381 18.6516 9.13613 19.1438 8.64385C19.6361 8.15156 20.3038 7.875 21 7.875C21.6962 7.875 22.3639 8.15156 22.8562 8.64385C23.3484 9.13613 23.625 9.80381 23.625 10.5ZM18.375 18.375C17.6788 18.375 17.0111 18.6516 16.5188 19.1438C16.0266 19.6361 15.75 20.3038 15.75 21C15.75 21.6962 16.0266 22.3639 16.5188 22.8562C17.0111 23.3484 17.6788 23.625 18.375 23.625V31.5C18.375 32.1962 18.6516 32.8639 19.1438 33.3562C19.6361 33.8484 20.3038 34.125 21 34.125H23.625C24.3212 34.125 24.9889 33.8484 25.4812 33.3562C25.9734 32.8639 26.25 32.1962 26.25 31.5C26.25 30.8038 25.9734 30.1361 25.4812 29.6438C24.9889 29.1516 24.3212 28.875 23.625 28.875V21C23.625 20.3038 23.3484 19.6361 22.8562 19.1438C22.3639 18.6516 21.6962 18.375 21 18.375H18.375Z"
              fill="#41454E"
            />
          </svg>
        </Link>

        <ul className="navigation__list">
          <li className="navigation__list--item">
            <Link className="navigation__list--item-link" to="/fake-person">
              Fake Person
            </Link>
          </li>
          <li className="navigation__list--item">
            <Link className="navigation__list--item-link" to="/fake-address">
              Fake Address
            </Link>
          </li>
          <li className="navigation__list--item">
            <Link className="navigation__list--item-link" to="/fake-product">
              Fake Product
            </Link>
          </li>
        </ul>

        <Menu as="div" className="navigation__hamburger hidden">
          <Menu.Button as="div" className="navigation__hamburger--btn">Menu</Menu.Button>
          <Menu.Items as="div" className="navigation__hamburger--items">
            <Menu.Item as="div" className="navigation__hamburger--items-item">
              <Link className="navigation__hamburger--item-link" to="/fake-person">
                Fake Person
              </Link>
            </Menu.Item>
            <Menu.Item as="div" className="navigation__hamburger--items-item">
              <Link className="navigation__hamburger--item-link" to="/fake-address">
                Fake Address
              </Link>
            </Menu.Item>
            <Menu.Item as="div" className="navigation__hamburger--items-item navigation__hamburger--items-item-last">
              <Link className="navigation__hamburger--item-link" to="/fake-product">
                Fake Product
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </nav>
    </div>
  );
};

export default Navigation;
