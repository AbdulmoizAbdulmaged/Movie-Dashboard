
import jest from 'jest-mock';
import { render,test,expect} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import CountryPieChart from './CountryPieChart';

// Mock chart.js to prevent errors during rendering
jest.mock('chart.js/auto', () => ({
  Chart: () => null,
}));

const store = createStore(rootReducer);

test('renders CountryPieChart with title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <CountryPieChart data={[]} />
    </Provider>
  );
  expect(getByText('Country Distribution')).toBeInTheDocument();
});