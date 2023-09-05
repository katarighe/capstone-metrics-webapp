import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import CountryDetail from '../components/CountryDetail';

test('Check if the CountryDetail component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryDetail />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});

