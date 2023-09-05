import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryDetail from '../components/CountryDetail';
import store from '../redux/store';

test('Check if the CountryDetail component is rendered correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <CountryDetail />
      </Provider>
      ,
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
