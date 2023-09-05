import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Home from '../components/Home';

it('Renders the Home component without crashing', () => {
  const root = render.create(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
      ,
    </BrowserRouter>,
  ).toJSON();
  expect(root).toMatchSnapshot();
});
