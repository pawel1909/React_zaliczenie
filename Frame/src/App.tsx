import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import useDropdown from 'react-dropdown-hook';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/common/header/Header';
import LeftMenu from './components/common/leftMenu/LeftMenu';
import HomePage from './components/unique/HomePage';
import TestPage from './components/unique/testPage/TestPage';
import DropdownMenu from './components/common/menu/DropdownMenu';
import SliderPage from './components/unique/pages/SliderPage';
import ProfilePage from './components/unique/pages/ProfilePage';
import EntititiesPage from './components/unique/pages/EntitiesPage';
import { Colors } from './helper/styled/Colors';
import { reducers } from './store/reducers';
import './App.css';

interface IWrapper {
  flexDirection: 'row' | 'column';
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.background};
  display: flex;
`;

const Wrapper = styled.div<IWrapper>`
  flex: 1;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

const DropdownContainer = styled.div`
  position: relative;
  margin-top: 55px;
  z-index: 1000;
`;

const DropdownWrapper = styled.div`
  position: fixed;
  width: 100%;
`;

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

function App() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [rowFlexDirection, setRowFlexDirection] = useState(true);

  const [dropdownTitle, setDropdownTitle] = useState('Home');
  const [dropdownUrl, setDropdownUrl] = useState('/media/icons/house2.svg');

  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  useLayoutEffect(() => {
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const updateLayout = () => {
    if(window.innerWidth < 800) {
      setShowHamburgerMenu(true)
      setRowFlexDirection(false);
    } else {
      setShowHamburgerMenu(false)
      setRowFlexDirection(true);
    }
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Header
            showHamburgerMenu={showHamburgerMenu}
            wrapperRef={wrapperRef}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
            setDropdownUrl={setDropdownUrl}
            setDropdownTitle={setDropdownTitle}
            dropdownUrl={dropdownUrl}
            dropdownTitle={dropdownTitle}
          />
          {showHamburgerMenu && dropdownOpen && (
            <DropdownContainer>
              <DropdownWrapper>
                <DropdownMenu
                  setDropdownUrl={setDropdownUrl}
                  setDropdownTitle={setDropdownTitle}
                />
              </DropdownWrapper>
            </DropdownContainer>
          )}
          <Wrapper flexDirection={rowFlexDirection ? 'row' : 'column'}>
            {!showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <HomePage showHamburgerMenu={showHamburgerMenu}/>
                )}
              />
              <Route
                exact
                path="/test"
                component={() => (
                  <TestPage />
                )}
              />
              <Route
                exact
                path="/sliderItem"
                component={() => (
                  <SliderPage
                    showHamburgerMenu={showHamburgerMenu}
                  />
                )}
              />
              <Route
                exact
                path="/profile"
                component={() => (
                  <ProfilePage
                    showHamburgerMenu={showHamburgerMenu}
                  />
                )}
              />
              <Route
                exact
                path="/entities"
                component={() => (
                  <EntititiesPage
                    showHamburgerMenu={showHamburgerMenu}
                  />
                )}
              />
            </Switch>
          </Wrapper>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
