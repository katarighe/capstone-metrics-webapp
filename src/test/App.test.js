import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';

test('Check if the App component is rendered correctly without crashing', () => {
  const tree = render(
    <Provider store={store}>
        <App />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
